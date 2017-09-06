import Vue from 'vue'
import Vuex from 'vuex'
import {createPersistedState} from './plugin'
import user from './modules/user'
import app from './modules/app'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    app,
    permission
  },
  getters,
  plugins: [
    createPersistedState({ //长期存储关键数据
      paths:[
        'user'
      ]
     }),
    createPersistedState({ //会话存储避免刷新丢失数据
      getState : key => JSON.parse(window.sessionStorage.getItem(key)),
      setState : (key, state) => window.sessionStorage.setItem(key, JSON.stringify(state)),
    })
  ]
})
