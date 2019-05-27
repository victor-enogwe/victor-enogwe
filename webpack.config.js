const webpack = require('webpack');
const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const BrowserSync = require('browser-sync-webpack-plugin');
const bsConfig = require('./bs-config');

const debug = process.env.NODE_ENV !== 'production';
const themeZipFile = 'enogwe.zip';
const themePaths = ['./lib', './assets', './vendor/composer', './functions.php', 'style.css'];
const wpDependencies = ['components', 'element', 'blocks', 'utils', 'date', 'data', 'i18n', 'default', 'editor', 'rich-text'];
const extractScssPlugin = new ExtractText({ filename: '[name].css' });
const loaderPlugin = new webpack.LoaderOptionsPlugin({ minimize: !debug, debug })
const envPlugin  = new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') });
const browserSyncPlugin = new BrowserSync(bsConfig);

const plugins = [envPlugin, loaderPlugin, browserSyncPlugin]

const scssConfig = {
    use: [
        { loader: 'css-loader' },
        { loader: 'sass-loader', options: { outputStyle: debug ? 'nested' : 'compressed' } }
    ]
};

const camelize = (dependency) => dependency.replace(/-\w/g, (match) => match.replace('-', '').toUpperCase())

const externalsWp = wpDependencies.reduce((externals, dependency) => ({
    ...externals, [`@wordpress/${dependency}`]: { this: [ 'wp', camelize(dependency) ] }
}), { });

const externals = Object.assign(
    externalsWp, { 'react-dom': 'ReactDOM', react: 'React', jquery: 'jQuery' }
);

const defaultConfig = {
    context: path.resolve(__dirname, 'assets'),
    mode: debug ? 'development' : 'production',
    devtool: debug ? 'inline-sourcemap' : false,
    plugins,
    watchOptions: {
        ignored: [
            'node_modules',
            'assets/css',
            'assets/js',
            'vendor',
            'theme',
            'lib',
            'ts/lib',
            'sass/lib'
        ]
    },
    stats: { children: false },
    optimization: { minimize: !debug }
};

const jsConfig = {
    ...defaultConfig,
    externals,
    entry: {
        enogwe: path.resolve(__dirname, 'ts/enogwe.tsx'),
        enogwe_admin: path.resolve(__dirname, 'ts/enogwe_admin.tsx')
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
    plugins: [extractScssPlugin, ...defaultConfig.plugins],
    entry: {
        enogwe: path.resolve(__dirname, 'sass/enogwe.scss'),
        enogwe_admin: path.resolve(__dirname, 'sass/enogwe_admin.scss')
    },
    module: {
        rules: [
            {
                test: /enogwe?\.scss$/,
                exclude: /node_modules/,
                use: extractScssPlugin.extract(scssConfig)
            }
        ]
    }
}

module.exports = [jsConfig, cssConfig];
