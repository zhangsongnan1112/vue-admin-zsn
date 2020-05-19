let express = require('express') // 引入express
let Mock = require('mockjs')
const Random = Mock.Random
let app = express()
// const Random = Mock.Random

app.use('/api/mode2/DataOne', function (req, res) {
  res.json(Mock.mock({
    'code': 200,
    'data|1-9': [{
      'key|+1': 1,
      'mockTitle|1': ['肆无忌惮'],
      'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
      'mockAction|1': ['下载', '试听', '喜欢']
    }]
  }))
})

app.post('/api/user/login', function (req, res) {
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

app.listen('8888', () => {
  console.log('8888')
})
