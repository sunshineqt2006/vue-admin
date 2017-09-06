const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  qxroles: state => state.permission.roles,
  roles: state => state.permission.routers,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}
export default getters
