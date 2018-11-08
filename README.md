
# react 学习笔记

## 安装nodejs npm

//设置淘宝镜像
npm  config set registry="https://registry.npm.taobao.org"
## 安装使用淘宝cpmn
npm install -g cnpm --registry=https://registry.npm.taobao.org

alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"


## 创建一个 react webapp

npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

npx create-react-app react-todolist

自动补全
https://github.com/reactjs/react-autocomplete
npx create-react-app react-autocomplete
npx start
npm install --save react-autocomplete

## 使用antd
先安装create-react-app(这里安装yarn)
$ npm install -g create-react-app yarn
然后新建一个项目
$ create-react-app antd-demo-yarn
接着进入项目目录并启动
$ cd antd-demo
$ yarn start
然后耐心地等待一会儿，浏览器显示Welcome to React之后就成功了第一步。
antd 是个库，所以我们要引入。现在从yarn 中引入安装并引入antd
$ yarn add antd
接着我们打开刚才创建的文件目录中，修改src/App.js,引入antd的按钮组件


