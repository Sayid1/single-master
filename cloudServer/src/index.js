import Vue from 'vue'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#cloudServer',
    router,
    render: h => h(App),
    mounted() {
      router.replace(window.location.hash.replace('#/cloudServer', ''))
    }
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap,
]
export function mount(props) {
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
  let el = document.getElementById('cloudServer')

  if (!el) {
    el = document.createElement('div')
    el.id = 'cloudServer'
    document.getElementById('container').appendChild(el)
  }
  return el
}