import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const baseRouter = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/Layout'),
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
  },
  {
    path: '/benchmark',
    name: 'benchmark',
    component: () => import('@/views/benchmark/index'),
    hidden: true
  },
  {
    path: '/user',
    redirect: '/user/detail',
    hidden: true,
    children: [{
      path: 'detail',
      name: 'detail',
      component: () => import('@/views/user/user'),
      meta: {
        title: '个人信息'
      }
    }]
  }

]
export default new Router({
  mode: 'history',
  routes: baseRouter
})
