import Vue from 'vue'
import App from './App'
import router from './router'

import BreadCrumbs from '@/components/BreadCrumbs'
import Sidebar from '@/components/Sidebar'
import MainArticle from '@/components/MainArticle'

Vue.config.productionTip = false
const globalComponents = [
  BreadCrumbs,
  Sidebar,
  MainArticle
]
globalComponents.forEach(component => {
  console.log('component', component)
  Vue.component(component.name, component)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
