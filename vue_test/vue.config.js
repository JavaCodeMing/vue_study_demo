module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js'
        },
    },
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器(方式一)
    /* devServer: {
        proxy: 'http://localhost:5000'
    }, */
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' },
                //ws: true, // 用于支持websocket,默认为true
                changeOrigin: true  // 用于控制请求头中的host值,默认为true
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                //ws: true, 
                changeOrigin: true 
            }
        },
        sockHost: 'http://localhost:8080/', 
    }
}