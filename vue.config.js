module.exports = {
 lintOnSave: true,
  
 devServer: {
 proxy: {
  // proxy all requests starting with /api to jsonplaceholder
  '/api': {
  target: 'http://localhost:8080', //����ӿ�
  changeOrigin: true,
  pathRewrite: {
   '^/api': '/static/mock' //�����·��
  }
  }
 }
 }
}