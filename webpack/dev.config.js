const path = require('path');
const webpack = require('webpack');

const host = 'localhost';
const port = 3000;
const customPath = path.join(__dirname, './customPublicPath');
const hotScript = 'webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true';

const baseDevConfig = () => ({
    devtool: 'eval-cheap-module-source-map',
    entry: {
        'editor-popup': [customPath, hotScript, path.join(__dirname, '../chrome/extension/popup/editor-popup')],
        'editor-content': [customPath, hotScript, path.join(__dirname, '../chrome/extension/content/editor-content')],
        'create-store': [customPath, hotScript, path.join(__dirname, '../chrome/extension/createStore')],
        'background': [customPath, path.join(__dirname, '../chrome/background')]
    },
    output: {
        path: path.join(__dirname, '../dev/js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
        new webpack.DefinePlugin({
            __HOST__: `'${host}'`,
            __PORT__: port,
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react-hmre']
                }
            }, {
                test: /\.s?css$/,
                exclude: path.resolve(__dirname, '../node_modules/react-mfb/mfb.css'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, '../node_modules/react-mfb/mfb.css'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    }
                ]
            }, {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                    }
                ]
            }
        ]
    }
});

const appConfig = baseDevConfig();

module.exports = [
    appConfig
];
