import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index'
import Sign from '@/view/sign'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/sign-in',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/:column',
      name: 'Column',
      component: index
    },
    {
      path: '/:column/:menu',
      name: 'menu',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
