#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入doc 文件夹
cd doc

# 运行开发脚本
yarn serve
