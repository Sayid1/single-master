import Vue from 'vue'
import axios from 'axios'
import singleSpaVue from 'single-spa-vue'
import ElementUI from 'element-ui'
import ParcelBtn from './components/HelloWord'

Vue.use(ElementUI)

const parcelLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(ParcelBtn)
  },
})


function mount(props) {
  return parcelLifecycles.mount({
    ...props,
  })
}

const ParcelButton = {
  bootstrap: parcelLifecycles.bootstrap,
  mount,
  unmount: parcelLifecycles.unmount
}

const axiosInstance = axios.create({
  baseURL: 'http://123.206.16.33:8093/bs/',
  header: {
    uuid: '9cb4cf22-6bb1-44d5-8267-d9230b01ac4a'
  },
  timeout: 3000
})

let loadingInstance

axiosInstance.interceptors.request.use(function (config) {
  loadingInstance = ElementUI.Loading.service({
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

export { axiosInstance, ParcelButton }