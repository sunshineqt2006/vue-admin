const webpack = require('webpack');
module.exports = {
    dev:'development',
    apiBaseUrl: '/api', //接口调用URL
    proxy: {
        '/api': {
            target: 'http://precsm.zmaxfilm.com/api/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}