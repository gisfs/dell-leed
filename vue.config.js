module.exports = {
  lintOnSave: true, // eslint 验证

  devServer: {
    port: 1111, 
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://localhost:1111', //代理接口
        changeOrigin: true,
        pathRewrite: {
        '^/api': '/static/mock' //代理的路径
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        //新版scss-loader(8.0及以上用prependData，旧版data)
        prependData: `@import "~@/assets/scss/variable.scss";`,
      }
    }
}


  

}