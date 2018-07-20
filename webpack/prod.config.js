const path = require('path');
const webpack = require('webpack');

const customPath = path.join(__dirname, './customPublicPath');

module.exports = {
    entry: {
        'editor-popup': [customPath, path.join(__dirname, '../chrome/extension/popup/editor-popup')],
        'editor-content': [customPath, path.join(__dirname, '../chrome/extension/content/editor-content')],
        'create-store': [customPath, path.join(__dirname, '../chrome/extension/createStore')],
        'background': [customPath, path.join(__dirname, '../chrome/background')]
    },
    output: {
        path: path.join(__dirname, '../build/js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: ['react-optimize']
                }
            }, {
                test: /\.css$/,
                exclude: path.resolve(__dirname, '../node_modules/react-mfb/mfb.css'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]
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
};
