export function validataUsername (value) {
  const usernameMap = ['admin', 'editor']
  return usernameMap.indexOf(value.trim()) >= 0
}

export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
