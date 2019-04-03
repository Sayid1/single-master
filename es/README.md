# Product_ES [![vue-cli3](https://img.shields.io/badge/vue--cli-3.x-brightgreen.svg)](https://github.com/vuejs/vue-cli) 

### vue vuex vue-router element-ui axios with vue/cli3.0

- 每个产品单独一个项目 第三方UI库必须全局引入 保证其他项目使用的时候不会缺少组件

## Getting started

> 安装依赖

```
 yarn

 or

 npm i 
```

> 生成 manifest.json 和 dll.js

```
  yarn dll

  or

  npm run dll
```

> 启动

```
 yarn serve

 or

 npm run serve
```

> 生产环境构建

```
 yarn build

 or

 npm run build
```

> 运行dll命令 把vue.config.js配置的第三方依赖包抽取成一个独立的.dll.js文件  可供多项目使用

- <h3>DllPlugin [DllPlugin](https://webpack.js.org/plugins/dll-plugin/)</h3>
- <h3>vue/cli3.0配置 [vue/cli 3.0](https://cli.vuejs.org/zh/config/)</h3>
- <h3>html-webpack-template配置 [html-webpack-template](https://github.com/jaketrent/html-webpack-template)</h3>
