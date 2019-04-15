
import axios from 'axios'
import { Loading  } from 'element-ui'

const axiosInstance = axios.create({
  baseURL: 'http://123.206.16.33:8093/bs/',
  header: {
    uuid: '9cb4cf22-6bb1-44d5-8267-d9230b01ac4a'
  },
  timeout: 3000
})

let loadingInstance

axiosInstance.interceptors.request.use(function (config) {
  loadingInstance = Loading.service({
    text: '加载中...'
  })
  return config
}, function (error) {
  loadingInstance.close()
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
  loadingInstance.close()
  return response
}, function (error) {
  loadingInstance.close()
  return Promise.reject(error)
})

const ElLoading = Loading
export { axiosInstance, ElLoading }