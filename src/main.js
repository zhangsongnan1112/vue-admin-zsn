
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/theme/index.css' 自定义的主题
import '@/styles/index.scss'
import '@/permission.js'
import '@/icon'
import loading from './utils/loading.js'
import store from './store'
import 'default-passive-events'
import * as filters from '@/filters'
import './utils/bus'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.use(ElementUI)
Vue.use(loading)

Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
