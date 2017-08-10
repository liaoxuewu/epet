import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '../components/index/indexpage.vue'
import catfood from '../components/catfood/catfood.vue'
import specialsell from '../components/specialsell/specialsell.vue'
import tinshop from '../components/tinshop/tinshop.vue'
import fashionvideo from '../components/fashionvideo/fashionvideo.vue'
import catclass from '../components/catclass/catclass.vue'

import home from '../components/home/home.vue'
import classify from '../components/classify/classify.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import mypet from '../components/mypet/mypet.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',  // 路由路径不带#
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: "/",
          redirect: "/home/indexpage"
        },
        {
          path: 'indexpage',
          component: indexpage,
        },
        {
          path: 'catfood',
          component: catfood,
        },
        {
          path: 'specialsell',
          component: specialsell
        },
        {
          path: 'tinshop',
          component: tinshop
        },
        {
          path: 'fashionvideo',
          component: fashionvideo
        },
        {
          path: 'catclass',
          component: catclass
        }
      ]
    },
      {
        path: '/classify',
        component: classify
      },
      {
        path: '/shopcart',
        component: shopcart
      },
      {
        path: '/mypet',
        component: mypet
      },
      ]
})
