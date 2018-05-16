import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import BreadCrumbs from '@/components/BreadCrumbs'
import Sidebar from '@/components/Sidebar'
import MainArticle from '@/components/MainArticle'
import Pagination from '@/components/Pagination'

const globalComponents = [
  BreadCrumbs,
  Sidebar,
  MainArticle,
  Pagination
]
globalComponents.forEach(component => {
  Vue.component(component.name, component)
})

Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
