// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import './assets/css/common.css'
import './assets/css/layout_top.css'
import './assets/css/style.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
