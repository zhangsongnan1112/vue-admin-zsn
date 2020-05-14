
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/theme/index.css' 自定义的主题
import '@/styles/reset.scss'
// import '@/permission.js'
import '@/icon'
Vue.use(ElementUI)
process.env.MOCK && require('../mock')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
