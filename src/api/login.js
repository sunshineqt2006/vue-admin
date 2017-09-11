import ApiHttp from './apiHttp'

const qs = require('qs')

const prefix = '/serviceUser';

const _LOGIN = `${prefix}/serviceLogin.do`;
const _LOGOUt = `${prefix}/serviceLoginout.do`;
const _INFO = `${prefix}/userInfo.do`

export function  loginWx(params) {
  return ApiHttp.post(_LOGIN, qs.stringify(params))
}

export function  LogOut(params) {
  console.log('params',params)
  return ApiHttp.post(_LOGOUt, qs.stringify(params))
}