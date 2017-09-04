import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _ = function (modual) {
 return true? () => System.import(`../views/${modual}`): require(`../views/${modual}`);
}

export const constantRouterMap = [
  { path: '/login', component:_('login/index'), hidden: true },
  { path: '/*', redirect: '/login'}
]

export default new Router({
  routes: constantRouterMap
})