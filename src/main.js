import Vue from 'vue'
import ElementUI from 'element-ui'
import './styles/theme/index.css'
// import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './store'
import App from './App.vue'
import './permission' // 权限

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


// https://github.com/PanJiaChen/vue-element-admin.git