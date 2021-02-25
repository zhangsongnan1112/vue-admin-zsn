import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      const hasUserInfo = store.getters.name
      if (hasUserInfo) {
        // has user info
        next()
      } else {
        // get user info
        try {
          const {roles} = await store.dispatch('user/getInfo')
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          console.log(accessRoutes, 999)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          // go to login
        }
      }
    }
  } else {
  /* no Token */
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({path: `/login?redirect=${to.path}`})
    }
  }
})
