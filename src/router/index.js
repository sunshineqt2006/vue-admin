import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
import Layout from '../views/layout/layout'

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

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'el-icon-document',
    noDropdown: true,
   children: [{ path: 'test', component: _('permission/index'), name: '权限测试页'}]
  },
  {
    path: '/theme',
    component: Layout,
    redirect: 'theme/index3',
    name: 'theme',
    icon: 'el-icon-document',
    children: [{ path: 'index3', component: _('theme/index3'), name: '换肤3'},
    { path: 'index2', component: _('theme/index2'), name: '换肤2'}]
  },
  { path: '/*', redirect: '/login',hidden: true,}
]