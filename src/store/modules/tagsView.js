
const state = {
  visitedViews: []
}

const mutations = {
  ADD_VISITED_VIEW: (state, value) => {
    if (state.visitedViews.some(v => v.path === value.path)) return
    state.visitedViews.push(
      Object.assign({}, value, {
        title: value.meta.title || 'no-name'
      })
    )
  },
  DEL_VISITED_VIEW: (state, value) => {
    for (const [i, v] of state.visitedViews.entries()) {
      console.log(v, 'x')
      if (v.path === value.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  }

}

const actions = {
  addVisitedView ({commit}, value) {
    commit('ADD_VISITED_VIEW', value)
  },
  delVisitedView ({commit, state}, value) {
    return new Promise(resolve => {
      commit('DEL_VISITED_VIEW', value)
      resolve([...state.visitedViews])
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
