import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const baseRoutes = [
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
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }
]

export const asyncRoutes = [
  {
    path: '/benchmark',
    name: 'benchmark',
    component: () => import('@/Layout'),
    hidden: false,
    meta: {
      role: ['edtior', 'admin'],
      title: '对标',
      icon: 'el-icon-eleme'
    },
    children: [
      {
        path: 'ben',
        name: 'ben',
        component: () => import('@/views/benchmark/index'),
        hidden: false,
        meta: {
          role: ['edtior', 'admin'],
          title: '对标',
          icon: 'el-icon-eleme'
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/user'),
        hidden: false,
        meta: {
          role: ['edtior', 'admin'],
          title: '对标1',
          icon: 'el-icon-eleme'
        }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    // redirect: '/user/detail',
    component: () => import('@/views/user/user'),
    hidden: true,
    meta: {
      role: ['admin'],
      title: '个人中心'
    }
  },
  // 404 must be at the end
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: baseRoutes
})
