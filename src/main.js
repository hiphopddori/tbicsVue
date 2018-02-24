// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// http://element.eleme.io/#/en-US/component/quickstart
import Vue from 'vue'
import {store} from './store'
import App from './App'
import axios from 'axios'

import router from './router'
import VModal from 'vue-js-modal'
import {MessageBox} from 'element-ui'



import './assets/css/common.css'          
import './assets/css/layout_top.css'      
import './assets/css/style.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// Vue.use(Element);
// Vue.prototype.$alert = MessageBox.alert;
Vue.config.devtools = true

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(VModal);


/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
