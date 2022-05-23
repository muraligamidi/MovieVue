const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  port: 3000
}),
module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/tutorial-frontend-1/',
}

