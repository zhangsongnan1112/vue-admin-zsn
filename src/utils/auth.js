import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (name, value) {
  return Cookies.set(TokenKey, value)
}

export function removeToken (name) {
  return Cookies.remove(name)
}
