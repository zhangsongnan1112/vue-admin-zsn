import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API
})

service.interceptors.request.use(config => {
  alert('request')
  return config
}, error => {
  console.log(error)
})

service.interceptors.response.use(response => {
  alert('response')
})

export default service
