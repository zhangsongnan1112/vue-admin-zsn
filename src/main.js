
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '@/assets/sass/theme/index.css'
import '@/styles/reset.scss'
// import './assets/icon/iconfont.js'
// import './assets/icon/icon.css'
// import '@/permission.js'
import '@/icon'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
