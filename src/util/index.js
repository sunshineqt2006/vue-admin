var debug = false, { slice } = [];








export function timeFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}












export const isArray = Array.isArray;
export function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
export function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
  }
export function merge(target) {
  
      var args = slice.call(arguments, 1);
  
      args.forEach((source) => {
          _merge(target, source, true);
      });
  
      return target;
  }

function _merge(target, source, deep) {
  for (var key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
          if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
              target[key] = {};
          }
          if (isArray(source[key]) && !isArray(target[key])) {
              target[key] = [];
          }
          _merge(target[key], source[key], deep);
      } else if (source[key] !== undefined) {
          target[key] = source[key];
      }
  }
}