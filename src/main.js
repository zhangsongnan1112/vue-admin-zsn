
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/theme/index.css' 自定义的主题
import '@/styles/reset.scss'
// import '@/permission.js'
import '@/icon'
import loading from './utils/loading.js'
import store from './store'

Vue.use(ElementUI)
Vue.use(loading)

// process.env.MOCK && require('../mock')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
