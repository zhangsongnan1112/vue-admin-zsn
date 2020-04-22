import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
})

service.interceptors.response.use(response => {
})

export default service
