# simple-admin
# 平台前端开发者----邓天
# 后台系统管理
# 目前准备开发中

本项目是基于 Vue2.6.10 和 Element UI2.8.2 实现的一个后台管理系统，在此基础上可以快速实现一个后台管理系统页面。

主要功能特点：

1. 基于 Vue + Vue-router 实现的前后端分离单页面应用
2. 动态侧边栏：支持多级嵌套菜单、支持侧边栏收起展开
3. 动态面包屑
4. 页面权限控制



## 目录结构

此项目使用 Vue Cli 3.7.0 创建，整个项目的目录结构如下。

    .
    ├── babel.config.js
    ├── .browserslistrc
    ├── docs
    ├── .eslintrc.js
    ├── .gitignore
    ├── package.json              项目描述文件
    ├── package-lock.json
    ├── postcss.config.js
    ├── public                    静态资源
    │   ├── favicon.ico
    │   └── index.html
    ├── README.md
    ├── src                       代码目录
    │   ├── api                   axios AJAX 请求配置
    │   ├── App.vue               入口组件
    │   ├── assets                静态资源
    │   ├── components            组件
    │   ├── main.js               入口文件
    │   ├── mock                  Mock.js 模拟数据
    │   ├── router.js             路由配置
    │   ├── store                 vuex 数据
    │   ├── utils                 通用方法
    │   └── views                 页面文件
    └── vue.config.js             vue-cli 配置文件

## 安装部署

运行前先在本地安装 Node.js 环境，然后将项目代码克隆到本地：

    git clone https://github.com/lirenjiegit/simple-admin

进入项目根目录，安装依赖并运行项目：

    npm install
    npm run serve

构建项目：

    npm run build

## 使用说明

### 路由配置

`./src/router.js` 文件中的路由配置具有重要作用，该配置决定了侧边栏和面包屑中的内容。路由中可以配置的 meta 参数如下：

    /**
     * 自定义的路由元信息（注意配置了meta的路由才会显示到侧边栏）:
     * meta: {
     *   title: 'title',                  显示在侧边栏、面包屑中的名字
     *   icon: 'svg-name',                该页面在侧边栏中显示的图标
     *   hidden: 'true',                  此级路由是否出现在左侧菜单栏，默认为false
     *   role: ['super_admin','admin']    可访问该页面的权限数组，默认为空，所有用户可访问
     * }
     */

### 侧边栏

侧边栏菜单通过自动读取路由实现，对应的路由需要配置 meta 中的 title 和 icon 参数，嵌套的路由自动递归生成对应的嵌套菜单。不需要添加到侧边栏中的路由要配置 `hidden: 'true'` 参数。

### 权限控制

支持基本的路由权限控制，通过路由 meta 中的 role 参数来完成，只有 meta.role 和 store.state.user.role 匹配才能访问，侧边栏菜单也会根据 role 进行过滤，只显示有权限的菜单项。

### axios

`./src/utils/custom-axios.js` 中配置了 axios 的请求拦截器和响应拦截器，可以对请求或响应进行统一管理，如在 HTTP 请求头中添加 token 字段等。建议根据需要自行修改处理逻辑。

### Mock

这里使用 [Mock.js](https://github.com/nuysoft/Mock/wiki) 来拦截页面发起的请求并返回模拟数据，相关代码放在 `./src/mock` 目录中。

