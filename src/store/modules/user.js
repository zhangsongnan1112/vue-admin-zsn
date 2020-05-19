import { loginApi } from '@/api/common'
const state = {
  token: '',
  name: '',
  avattar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  login ({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      loginApi(userInfo).then(res => {
        console.log(res, 111)
        const {data} = res
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
