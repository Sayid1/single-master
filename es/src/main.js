import Vue from 'vue'
import VueCookie from 'vue-cookie'
import './plugins/axios'
import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'


Vue.prototype.$echarts = echarts
Vue.use(VueCookie)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
