import Vue from 'vue'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import { connect } from 'redux-vuex'
import App from './App.vue'
import router from './router'

Vue.use(ElementUI) // TODO 按需加载
Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#es',
    router,
    render: h => h(App),
    mounted() {
      router.replace(location.hash.replace('#/es', ''))
    }
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap,
]

export function mount(props) {

  connect({
    Vue,
    store: props.store
  })
  
  createDomElement()
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
  let el = document.getElementById('es')

  if (!el) {
    el = document.createElement('div')
    el.id = 'es'
    document.getElementById('container').appendChild(el)
  }
  return el
}
