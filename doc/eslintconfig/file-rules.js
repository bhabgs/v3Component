/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 10:06:56
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-19 14:01:12
 */
const vueRules = {
  'vue/singleline-html-element-content-newline': 0,
  'vue/html-closing-bracket-newline': 0,
};

exports.vue = {
  files: ['*.vue'],
  excludedFiles: ['*.ts', '*.tsx'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: vueRules,
};

exports.ts = {
  files: ['*.ts', '*.tsx'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '../tsconfig.json',
    tsconfigRootDir: __dirname,
    experimentalDecorators: true,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars-experimental': 0,
  },
};
