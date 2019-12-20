module.exports = {
  lintOnSave: true, // eslint 验证
  
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://localhost:8080', //代理接口
        changeOrigin: true,
        pathRewrite: {
        '^/api': '/static/mock' //代理的路径
        }
      }
    },
    port: 8079,     // 端口
  },



}