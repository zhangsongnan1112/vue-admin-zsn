import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/Layout'

Vue.use(Router)

export const baseRoutes = [
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
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '首页',
        component: () => import('@/views/dashboard/index'),
        meta: {
          role: ['edtior', 'admin'],
          title: '首页',
          icon: 'el-icon-s-grid',
          affix: true
        }
      }
    ]
  },
  {
    path: '/chart',
    component: Layout,
    redirect: '/charts/charts',
    children: [
      {
        path: 'charts',
        name: '图表',
        component: () => import('@/views/benchmark/index'),
        meta: {
          role: ['edtior', 'admin'],
          title: '图表',
          icon: 'el-icon-s-grid',
          affix: true
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/detail',
    hidden: true,
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/user/user'),
        meta: {
          role: ['edtior', 'admin'],
          title: 'User-Personal'
        }
      }
    ]
  },
  {
    path: '/attr',
    name: '/attr',
    component: Layout,
    redirect: '/attr/user',
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/attr'),
        meta: {
          role: ['edtior', 'admin'],
          title: '对标1',
          icon: 'el-icon-s-flag'
        }
      }

    ]
  },
  // 404 must be at the end
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: baseRoutes
})
