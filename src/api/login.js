import ApiHttp from './apiHttp'

const qs = require('qs')

const prefix = '/serviceUser';

const _LOGIN = `${prefix}/serviceLogin.do`;
const _LOGOUt = `${prefix}/serviceLoginout.do`;
const _INFO = `${prefix}/userInfo.do`

export function  loginWx(params) {
  return ApiHttp.post(_LOGIN, qs.stringify(params))
}