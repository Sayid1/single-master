import Vue from 'vue'
import { connect } from 'redux-vuex'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from './router'
import './pages/cloud-host.vue'
import './pages/cloud-host-add.vue'
import './pages/mirror-image.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app1',
    router,
    render: h => h(App),
    mounted() {
      router.replace(window.location.hash.replace('#/cloudServer', ''))
    }
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
]

export function mount(props) {
  connect({
    Vue,
    store: props.store
  })
  createDomElement()
  props.globalEventDistributor.dispatch({
    type: 'ROUTER',
    router
  })
  return vueLifecycles.mount({
    globalEventDistributor: props.globalEventDistributor
  }).then(vm => {
    props.globalEventDistributor.dispatch({
      type: 'VM',
      vm: vm
    })
  })
}

export const unmount = [
  vueLifecycles.unmount,
]

function createDomElement() {
  let el = document.getElementById('app1')

  if (!el) {
    el = document.createElement('div')
    el.id = 'app1'
    document.getElementById('container').appendChild(el)
  }
  return el
}