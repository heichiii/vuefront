const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: './',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/variables.less')]
    }
  },
  devServer: {
    proxy: {
        '/training': {
            target: 'http://127.0.0.1:8000/training', //接口域名（你请求的第三方接口）
            changeOrigin: true,             //是否跨域 （虚拟的站点需要更管origin）
            ws: true,                       //是否代理 websockets
            secure: true,                   //是否https接口
            pathRewrite: {                  //路径重置
                '^/training': ''
            }
        }
    }
}
})
