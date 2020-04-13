import service from '@/utils/request.js'

export function loginApi (params) {
  return service({
    url: '/login',
    methods: 'get',
    params
  })
}
