const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      // If using the runtime only build
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js')
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cpg-assignment/'
    : '/'
})
