module.exports = {
  lintOnSave: true, // eslint ��֤

  devServer: {
    port: 1111, 
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://localhost:1111', //����ӿ�
        changeOrigin: true,
        pathRewrite: {
        '^/api': '/static/mock' //�����·��
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        //�°�scss-loader(8.0��������prependData���ɰ�data)
        prependData: `@import "~@/assets/scss/variable.scss";`,
      }
    }
}


  

}