import { baseRoutes, asyncRoutes } from '@/router'

function hasPermission (roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.includes(role))
  } else {
    return true
  }
}

function filterAsyncRoutes (routes, roles) {
  let arr = []
  routes.forEach(item => {
    if (hasPermission(roles, item)) {
      if (item.children) {
        item.children = filterAsyncRoutes(item.children, roles)
      }
      arr.push(item)
    }
  })
  return arr
}

const state = {
  routers: baseRoutes,
  addRouters: asyncRoutes
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = baseRoutes.concat(routers)
  }
}

const actions = {
  generateRoutes ({commit}, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
