const Mock = require('mockjs')
const Random = Mock.Random
Mock.setup({
  timeout: 0 - 300
})

Mock.mock('/user/login', 'post', {
  'code': 0,
  'data|1-10': [{
    'fullName': Random.cname(), // 随机生成中文人名
    'userId': Random.natural(0, 5),
    'mtime': Random.datetime(),
    'color': Random.color(),
    'admin': Random.boolean(),
    'ename': Random.first()
  }],
  'msg': 'success'
})
