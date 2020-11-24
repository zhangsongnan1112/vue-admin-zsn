import request from '@/utils/request'

export function loginApi (params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5fbced3dd0b90b2ee9392553/api/login',
    method: 'post',
    params
  })
}

export function myselfApi (params) {
  return request({
    url: 'https://www.easy-mock.com/mock/5fbced3dd0b90b2ee9392553/api/myself',
    method: 'get',
    params
  })
}
