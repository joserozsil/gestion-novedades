// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

import date from './pipes/date'
import text from './pipes/text'

import Vuex from 'vuex'

import axios from 'axios'

window.Event = new Vue()

axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

global.axios = axios

Vue.use(Vuex)

Vue.use(BootstrapVue)

Vue.filter('listDate', date.listDate)
Vue.filter('textShort', text.short)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
