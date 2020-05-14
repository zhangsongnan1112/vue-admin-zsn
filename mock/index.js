
// import Mock from 'mockjs'
// import user from './user'
// const Mock = require('mockjs')
// Mock.mock(`/user/login`, 'get', req => {
//   return user.userInfo
// })

const Mock = require('mockjs')
Mock.setup({
  timeout: 0 - 300
})

Mock.mock('/user/login', 'post', {
  'code': 0,
  'data': {
    'fullName': '@CNAME', // 随机生成中文人名
    'userId': 1000234234001,
    'username': 'zhangsan'
  },
  'msg': 'success'
})
