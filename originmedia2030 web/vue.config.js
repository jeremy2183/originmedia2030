// 'use strict';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack(config) {
    // js output config
    config.output.filename = `[name].${process.env.VUE_APP_VERSION}.js`;
    config.output.chunkFilename = `[name].${process.env.VUE_APP_VERSION}.js`;
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src')).set('common', resolve('src/assets/common'));
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(args => [
        {
          filename: `static/css/[name]-${process.env.VUE_APP_VERSION}.css`,
          chunkFilename: `static/css/[name]-${process.env.VUE_APP_VERSION}.css`,
        },
      ]);
    }
    config.module.rules.delete('eslint'); //remove the eslint rule
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'OriginMedia2030',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_TARGET + 'api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/_mixin.scss";
        `,
      },
    },
  },
};
