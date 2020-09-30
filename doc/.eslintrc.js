/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-02 10:12:53
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-09 11:17:51
 */
const { vue, ts, rules } = require("./eslintconfig");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [vue, ts],
  rules
};
