import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? Cookies.get('sidebarStatus') : true
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', true)
    } else {
      Cookies.set('sidebarStatus', false)
    }
  }
}

const actions = {
  toggleSideBar ({commit}) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
