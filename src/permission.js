import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
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
        await store.dispatch('user/getInfo')
        next({ ...to, replace: true })
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
