'use strict';

const webpack = require('webpack');
var path = require('path');
module.exports = {
'output': {
    'filename': 'app.js',
    'path': path.join(__dirname, 'public/javascripts'),
},
'resolve': {
    'extensions': [".js", ".jsx", ".json", "scss"]
  },
'devServer': {
    'publicPath': '/javascripts',
    'https':false,
    host: '0.0.0.0',
    port:8080,
    headers: {
        "Access-Control-Allow-Origin": "*" 
    }
},
'watchOptions': {
    aggregateTimeout: 300,
    poll:1000
},
'mode': 'development',
'entry': {
    'main': [__dirname + '/src/App.jsx'],
},
'module': {
    'rules': [
        {
            'test': /\.json$/,
            'loader': 'json-loader',
        },
        {
            'test': /\.svg$/,
            'loader': 'svg-inline-loader'
        },
        {
            'test': /\.jsx?$/,
            'exclude': /(node_modules|bower_components|\/vendor)/,
            'loader': 'babel-loader', // 'babel-loader' is also a legal name to reference
        },
        {
            'test': /\.css$/,
            'loader': 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        },
        {
            'test': /\.scss$/,
            'loader': 'style-loader!sass-loader',
        },
    ],
},
plugins: [
    new webpack.DefinePlugin({
        '3gir': {
            'static': {
                'host': JSON.stringify(process.env.NODE_ENV === "development" ? 'http://127.0.0.1:8080' : 'http://127.0.0.1'),
            }
        },
    }),
],
};
