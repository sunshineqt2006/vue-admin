import { loginWx, LogOut } from '../../api/login'

export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        loginWx(loginInfo).then(response => {
          const data = response.resultData
          commit('SET_USERINFO', data)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      
      return new Promise((resolve, reject) => {
        LogOut({userId:state.userInfo.id}).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_USERINFO', '')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}