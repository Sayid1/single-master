import Vue from 'vue'
// import { Input, ButtonGroup, Button, Table, Row}  from 'element-ui'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import { connect } from 'redux-vuex'
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
