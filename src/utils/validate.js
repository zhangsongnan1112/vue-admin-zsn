export function validataUsername (value) {
  const usernameMap = ['admin', 'editor']
  return usernameMap.indexOf(value.trim()) >= 0
}
