/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-04-14 09:55:34
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-04-14 17:17:34
 */
const package = require('../package.json');

const assetsCDN = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'ant-design-vue': 'antd',
    vuex: 'Vuex',
    axios: 'axios',
    moment: 'moment',
  },
  css: ['https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.12/dist/antd.css'],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
    'https://cdn.jsdelivr.net/npm/moment@2.24.0/min/moment.min.js',
    'https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.12/dist/antd.min.js',
  ],
};

const isProd = process.env.NODE_ENV === 'production';

const conf = {
  isProd,
  title: 'template',
  library: 'micro-template',
  publicPath: 'micro-template',
};

const chainWebpack = (config) => {
  config.plugin('html').tap((args) => {
    cdn = {
      css: assetsCDN.css,
    };
    args[0] = Object.assign(args[0], {
      title: conf.title,
      cdn,
      version: package.version,
    });
    if (isProd) {
      args[0] = Object.assign(args[0], { cdn: assetsCDN });
    }
    return args;
  });
};

exports.default = {
  library: '',
  publicPath: '',
  chainWebpack,
  externals: isProd ? assetsCDN.externals : {},
};
