const webpack = require('webpack');
const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const BrowserSync = require('browser-sync-webpack-plugin');
const bsConfig = require('./bs-config');
const Terser = require("terser-webpack-plugin");
const EnogwePack = require('./EnogwePackPlugin');

const debug = process.env.NODE_ENV !== 'production';
const rsDependencies = ['Alert', 'Modal', 'Badge', 'OverlayTrigger', 'Overlay', 'Popover', 'ModalBody', 'Form', 'Tabs', 'Nav'];
const wpDependencies = ['components', 'element', 'blocks', 'utils', 'date', 'data', 'i18n', 'default', 'editor', 'rich-text', 'hooks'];
const extractScssPlugin = new ExtractText({ filename: '[name].css' });
const LoaderPlugin = new webpack.LoaderOptionsPlugin({ minimize: !debug, debug })
const terserOptions = { terserOptions: { compress: true, ecma: '5', mangle: true, keep_classnames: false, keep_fnames: false } }
const TerserPlugin = new Terser({ ...terserOptions, extractComments: true });
const EnvPlugin  = new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') });
const BrowserSyncPluginApp = new BrowserSync(bsConfig.app);
const BrowserSyncPluginJs = new BrowserSync(bsConfig.coverageJs);
const BrowserSyncPluginPhp = new BrowserSync(bsConfig.coveragePhp);
const EnogwePackPlugin = new EnogwePack()
const plugins = [EnvPlugin, LoaderPlugin];
const camelize = (dependency) => dependency.replace(/-\w/g, (match) => match.replace('-', '').toUpperCase())

const scssConfig = {
    use: [
        { loader: 'css-loader' },
        { loader: 'sass-loader', options: { outputStyle: debug ? 'nested' : 'compressed' } }
    ]
};

const externalsWp = wpDependencies.reduce((externals, dependency) => ({
    ...externals, [`@wordpress/${dependency}`]: { this: [ 'wp', camelize(dependency) ] }
}), { });

const externalsRs = rsDependencies.reduce((externals, dependency) => ({
    ...externals, [`reactstrap/${dependency}`]: { this: [ 'Reactstrap', camelize(dependency) ] }
}), { });

const externals = Object.assign(
    externalsWp, externalsRs, { 'react-dom': 'ReactDOM', react: 'React', jquery: 'jQuery' }
);

const defaultConfig = {
    context: path.resolve(__dirname, 'assets'),
    mode: debug ? 'development' : 'production',
    devtool: debug ? 'inline-sourcemap' : false,
    plugins,
    stats: { children: false },
    optimization: { minimize: !debug, minimizer: [TerserPlugin] }
};

const jsConfig = {
    ...defaultConfig,
    plugins: [...defaultConfig.plugins, EnogwePackPlugin, BrowserSyncPluginJs, BrowserSyncPluginPhp],
    externals,
    entry: {
        enogwe: path.resolve(__dirname, 'ts/enogwe.tsx'),
        'admin/settings': path.resolve(__dirname, 'ts/admin/settings/index.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js'),
        libraryTarget: 'this',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
}

const cssConfig = {
    ...defaultConfig,
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'assets/css')
    },
    plugins: [extractScssPlugin, ...defaultConfig.plugins, BrowserSyncPluginApp],
    entry: {
        enogwe: path.resolve(__dirname, 'sass/enogwe.scss'),
        'admin/settings': path.resolve(__dirname, 'sass/admin/settings.scss')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractScssPlugin.extract(scssConfig)
            }
        ]
    }
}

module.exports = [cssConfig, jsConfig];
