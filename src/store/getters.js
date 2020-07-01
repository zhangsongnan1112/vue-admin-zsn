export default {
  name: state => state.user.name,
  avattar: state => state.user.avattar,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routers,
  sidebar: state => state.app.sidebar
}
