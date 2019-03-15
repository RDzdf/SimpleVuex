// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入

// 一个演示工具，需要自己下载安装
Vue.config.devtools = true;//默认是true,但是生产环境需要关闭。

Vue.config.productionTip = true;//默认是true，但是生产环境我们需要关闭。这是提示信息！


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注入全局
  components: { App },
  template: '<App/>'
})
