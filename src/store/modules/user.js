const state = {
  token: '',
  name: '',
  avattar: ''
}

const mutation = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

export default {
  state,
  mutation
}
