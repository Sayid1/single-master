import Vue from 'vue'
import { connect } from 'redux-vuex'
// import { Input, ButtonGroup, Button, Table, Row}  from 'element-ui'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from './router'

// Vue.use(Input)
// Vue.use(ButtonGroup)
// Vue.use(Button)
// Vue.use(Table)
// Vue.use(Row)
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
    console.log(vm)
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