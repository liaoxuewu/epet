// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
