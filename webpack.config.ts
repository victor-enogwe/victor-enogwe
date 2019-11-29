import BrowserSync from 'browser-sync-webpack-plugin'
import ExtractText from 'extract-text-webpack-plugin'
import path from 'path'
import Terser from 'terser-webpack-plugin'
import webpack from 'webpack'
import bsConfig from './bs-config'
import EnogweWebpackPlugin from './enogwe.webpack.plugin'

const debug = process.env.NODE_ENV !== 'production'
const rsDependencies = ['Alert', 'Modal', 'Badge', 'OverlayTrigger', 'Overlay', 'Popover', 'ModalBody', 'Form', 'Tabs', 'Nav']
const wpDependencies = ['components', 'element', 'blocks', 'utils', 'date', 'data', 'i18n', 'default', 'editor', 'rich-text', 'hooks']
const extractScssPlugin = new ExtractText({ filename: '[name].css' })
const LoaderPlugin = new webpack.LoaderOptionsPlugin({ minimize: !debug, debug })
const terserOptions: Terser.TerserPluginOptions = {
    extractComments: true,
    terserOptions: {
        compress: true,
        mangle: true,
        keep_classnames: false,
        keep_fnames: false,
        ecma: 5
    }
}
const TerserPlugin = new Terser(terserOptions)
const EnvPlugin = new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') })
const BrowserSyncPluginApp = new BrowserSync(bsConfig.app)
const BrowserSyncPluginJs = new BrowserSync(bsConfig.coverageJs)
const BrowserSyncPluginPhp = new BrowserSync(bsConfig.coveragePhp)
const EnogweWebpackPluginInstance = new (EnogweWebpackPlugin as any)()
const plugins: webpack.Plugin[] = [EnvPlugin, LoaderPlugin]
const camelize = (dependency: string) => dependency.replace(/-\w/g, (match) => match.replace('-', '').toUpperCase())

const scssConfig = {
    use: [
        { loader: 'css-loader' },
        { loader: 'sass-loader', options: { outputStyle: debug ? 'nested' : 'compressed' } }
    ]
}

const externalsWp = wpDependencies.reduce((externalPlugins, dependency) => ({
    ...externalPlugins, [`@wordpress/${dependency}`]: { this: ['wp', camelize(dependency)] }
}), {})

const externalsRs = rsDependencies.reduce((externalPlugins, dependency) => ({
    ...externalPlugins, [`reactstrap/${dependency}`]: { this: ['Reactstrap', camelize(dependency)] }
}), {})

const externals = Object.assign(
    externalsWp, externalsRs, { 'react-dom': 'ReactDOM', react: 'React', jquery: 'jQuery' }
)

const defaultConfig: webpack.Configuration = {
    mode: debug ? 'development' : 'production',
    devtool: debug ? 'inline-source-map' : false,
    plugins,
    stats: { children: false },
    optimization: { minimize: !debug, minimizer: [TerserPlugin] }
}

const jsConfig = {
    ...defaultConfig,
    context: path.resolve(__dirname, 'ts'),
    plugins: [...defaultConfig.plugins as webpack.Plugin[], EnogweWebpackPluginInstance, BrowserSyncPluginJs, BrowserSyncPluginPhp],
    externals,
    entry: {
        'frontend/enogwe': './frontend/enogwe.tsx',
        'admin/settings': './admin/settings/index.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js'),
        libraryTarget: 'this'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules|coverage|assets|vendor/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.(sass|scss|css)$/, use: ['style-loader', ...scssConfig.use] }
        ]
    }
}

const cssConfig = {
    ...defaultConfig,
    context: path.resolve(__dirname, 'sass'),
    entry: {
        'frontend/enogwe': './frontend/enogwe.scss',
        'admin/settings': './admin/settings.scss'
    },
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'assets/css')
    },
    plugins: [extractScssPlugin, ...defaultConfig.plugins as webpack.Plugin[], BrowserSyncPluginApp],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: extractScssPlugin.extract(scssConfig)
            }
        ]
    }
}

export default [cssConfig, jsConfig]
