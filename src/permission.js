import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

// const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()
  if (hasToken) {
  // hasTOken
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      const hasUserInfo = store.getters.name
      if (hasUserInfo) {
        next()
      } else {

      }
    }
  } else {
  /* no Token */
  }
})
