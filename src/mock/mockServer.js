import Mock from 'mockjs'
import data from './data.json'

//注册路由
Mock.mock('/api/indexpage',{
  code: 0,
  data: data.indexpage
})

