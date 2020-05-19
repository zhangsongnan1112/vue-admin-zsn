let express = require('express') // 引入express
let Mock = require('mockjs')
const Random = Mock.Random
let app = express()
// const Random = Mock.Random

app.use('/api/myself', function (req, res) {
  res.json(Mock.mock({
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
  }))
})

app.post('/api/user/login', function (req, res) {
  res.json(Mock.mock({
    'code': 0,
    'data': {
      'token': '@string("lower", 5)'
    },
    'msg': 'success'
  }))
})

app.listen('8888', () => {
  console.log('8888')
})
