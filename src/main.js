// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import axios from 'axios'
import stores from './store/store'
import echarts from 'echarts'
import {
  MessageBox
} from 'element-ui'
Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false
require('./assets/css/base.css');
require('./assets/css/icon.css');
//require('fixed-data-table/dist/fixed-data-table.css');
/* eslint-disable no-new */
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'vue-easytable/libs/themes-base/index.css'
Vue.use(ElementUI);
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)


axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  // stores.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  // stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL='http://localhost:8080/';
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
window.vue = new Vue({
  el: '#app',
  router,
  store:stores,
  components: { App },
  template: '<App/>'
})
