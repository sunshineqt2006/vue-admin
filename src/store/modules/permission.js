import { asyncRouterMap, constantRouterMap } from '../../router'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  
  const accessedRouters = asyncRouterMap.filter(route => {
    console.log('route',roles,route)
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap, //constantRouterMap
    addRouters: [],
    roles:[]
  },
  mutations: {
    SET_init_ROUTERS: (state, routers) => {
      state.routers = routers
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      console.log('state.routers',state.routers)
    },
    SET_ROLES(state,roles){
      state.roles = roles
    }
  },
  actions: {
    initRouters({ commit }, data){
      commit('SET_init_ROUTERS', data)
    },
    GenerateRoutes({ commit,state }, data) {
      commit('SET_ROLES', data.roles)
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        console.log('roles',roles.indexOf('admin') > 0)
        if (roles.indexOf('admin') > 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission



