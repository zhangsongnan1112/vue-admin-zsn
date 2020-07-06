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
        name: 'Dashboard',
        component: () => import('@/views/benchmark/index'),
        meta: {
          role: ['edtior', 'admin'],
          title: 'Dashboard',
          icon: 'el-icon-s-grid'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/personal',
    meta: {
      icon: 'el-icon-s-custom',
      title: 'User'
    },
    children: [
      {
        path: 'personal',
        name: 'Personal',
        component: () => import('@/views/user/user'),
        meta: {
          role: ['edtior', 'admin'],
          title: 'Personal',
          icon: 'el-icon-s-custom'
        }
      },
      {
        path: 'personal1',
        name: 'Personal1',
        component: () => import('@/views/user/user'),
        meta: {
          role: ['edtior', 'admin'],
          title: 'Personal1',
          icon: 'el-icon-s-custom'
        }
      }
    ]
  },
  {
    path: '/attr',
    name: '/attr',
    component: Layout,
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
