import Cookies from 'js-cookie'

const TokenKey = 'zsn-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (value) {
  return Cookies.set(TokenKey, value)
}

export function removeToken (name) {
  return Cookies.remove(name)
}
