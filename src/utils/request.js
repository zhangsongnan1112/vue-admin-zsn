import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  })

service.interceptors.response.use(response => {
  const res = response.data
  return res
})

export default service
