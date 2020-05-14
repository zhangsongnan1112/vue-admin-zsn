import request from '@/utils/request'

export function loginApi (params) {
  return request({
    url: '/user/login',
    method: 'post',
    params
  })
}
