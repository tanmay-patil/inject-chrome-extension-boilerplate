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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=assets/images/[name].[ext]"
            },
            {
                test: /\.mp3$/,
                use: [{ loader: 'url-loader?limit=15000&name=media/[hash].[ext]' }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{ loader: 'url-loader?limit=15000&name=fonts/[hash].[ext]' }]
            },
        ]
    }
});

const appConfig = baseDevConfig();

module.exports = [
    appConfig
];
