import Vue from 'vue'
import axios from 'axios'
import singleSpaVue from 'single-spa-vue'
import ElementUI from 'element-ui'
import { connect } from 'redux-vuex'
import ParcelBtn from './components/ParcelButton'
import ParcelInp from './components/ParcelInput'

Vue.use(ElementUI) // TODO 按需加载
Vue.config.productionTip = false

const parceButtonlLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(ParcelBtn)
  },
})
const ParcelInputlLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(ParcelInp)
  },
})


const ParcelButton = {
  bootstrap: parceButtonlLifecycles.bootstrap,
  mount: props => {
    connect({
      Vue,
      store: props.store
    })
    return parceButtonlLifecycles.mount({
      ...props,
    })
  },
  unmount: parceButtonlLifecycles.unmount
}
const ParcelInput = {
  bootstrap: ParcelInputlLifecycles.bootstrap,
  mount: props => ParcelInputlLifecycles.mount({
    ...props,
  }),
  unmount: ParcelInputlLifecycles.unmount
}

// const initParcelLifecycles = singleSpaVue({
//   Vue
// })

const ParcelInput = {
  bootstrap: ParcelInputlLifecycles.bootstrap,
  mount: props => ParcelInputlLifecycles.mount({
    ...props,
  }),
  unmount: ParcelInputlLifecycles.unmount
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

const Loading = ElementUI.Loading

export { axiosInstance, ParcelButton, ParcelInput, Loading }