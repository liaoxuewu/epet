// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import { Swipe, SwipeItem, Navbar, TabItem,TabContainer, TabContainerItem,Cell } from 'mint-ui';
import VueScroller from 'vue-scroller'

import './mock/mockServer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Vue.use(VueScroller)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
