import service from '@/utils/request.js'

export function loginApi (params) {
  return service({
    url: '/apis/login',
    methods: 'get',
    params
  })
}
