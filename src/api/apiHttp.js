import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
let BASE_URL = _BASE_URL ? _BASE_URL : '';

// 创建axios实例
const service = axios.create({
  baseURL: _BASE_URL, // api的base_url
  timeout: 5000,                  // 请求超时时间
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    //  'accept':'application/json; version=1'
}
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    console.log('store.getters.uuid',store.getters.userInfo.uuid)
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use( response => {
  const res = response.data;
    if (res.resultCode !== "0") {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.resultCode === 8000 || res.resultCode === 50012 || res.resultCode === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
          });
        })
      }
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  },error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
