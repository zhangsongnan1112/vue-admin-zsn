import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const baseRouter = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/components/HelloWorld'),
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login'),
    hidden: true,
    meta: {
      title: '登录'
    }
  }
]
export default new Router({
  mode: 'history',
  routes: baseRouter
})
