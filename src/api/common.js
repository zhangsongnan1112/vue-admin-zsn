import request from '@/utils/request'

export function loginApi (params) {
  return request({
    url: '/api/user/login',
    method: 'post',
    params
  })
}

export function myselfApi (params) {
  return request({
    url: '/api/mode2/DataOne',
    method: 'get',
    params
  })
}
