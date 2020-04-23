import service from './service'

// 登录接口
export function loginApi(params) {
    return service({
        url: '/sysUser/login',
        method: 'post',
        data: params
    })
}

// 获取用户信息接口
export function getUserInfo(params) {
    return request({
      // url: '/hylpmsnew/private/userInfo',
      url: '/sysUser/info',
      method: 'get',
    })
}

// 注销登录接口
export function logout() {
    return request({
      url: '/sysUser/logout',
      method: 'post'
    })
}