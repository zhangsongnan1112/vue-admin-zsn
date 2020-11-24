import { loginApi, myselfApi } from '@/api/common'
import {setToken, getToken} from '@/utils/auth'
const state = {
  token: getToken(),
  name: '',
  avattar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  roles: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATTAR: (state, avattar) => {
    state.avattar = avattar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login ({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      loginApi(userInfo).then(res => {
        const {data} = res
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo ({commit}) {
    // return new Promise((resolve, reject) => {
    //   myselfApi().then(res => {
    //     const {data} = res
    //     commit('SET_NAME', data.fullName)
    //     commit('SET_ROLES', data.roles)
    //     resolve(data)
    //   }).catch((error) => {
    //     reject(error)
    //   })
    // })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
