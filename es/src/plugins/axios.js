import Vue from 'vue'
import axios from 'axios'

const conf = {
  baseURL: process.env.VUE_APP_baseURL || '',
  timeout: 60 * 1000,
}

const instance = axios.create(conf)

instance.interceptors.request.use(config => config)

instance.interceptors.response.use(res => res, err => err)

Plugin.install = function (vue) {
  vue.axios = instance
  window.axios = instance
  Object.defineProperties(vue.prototype, {
    axios: {
      get() {
        return instance
      },
    },
    $axios: {
      get() {
        return instance
      },
    },
  })
}

Vue.use(Plugin)

export default Plugin
