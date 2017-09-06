import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
import Layout from '../views/layout/layout'
import test from '../views/test'

const _ = function (modual) {
 return () => System.import(`../views/${modual}`)
}

export const constantRouterMap = [
  { path: '/login', component:_('login/index'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _('dashboard/index') }]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'el-icon-document',
    noDropdown: true,
    children: [{ path: 'index', component: _('introduction/index'), name: '简述' }]
  },
 
]

store.dispatch('initRouters',constantRouterMap)

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'quanxian',
    meta: { role: ['admin'] },
    noDropdown: true,
    children: [{ path: 'index', component: _('permission/index'), name: '权限测试页', meta: { role: ['admin'] }}]
  },
  { path: '/*', redirect: '/login'}
]