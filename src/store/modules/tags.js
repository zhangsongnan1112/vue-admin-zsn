
const state = {
  visitedViews: []
}

const mutations = {
  ADD_VISITED_VIEW: (state, value) => {
    if (state.visitedViews.some(v => v.path === value.path)) return
    state.visitedViews.push(value)
    console.log(state.visitedViews, 'visitedViews')
  }
}

const actions = {
  addVisitedView ({commit}, value) {
    commit('ADD_VISITED_VIEW', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
