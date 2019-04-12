import Vue from 'vue'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import { connect } from 'redux-vuex'
import App from './App.vue'
import router from './router'

console.log(process.env.BASE_URL)
console.log(process.env.NODE_ENV)
console.log(process.env.DEF)

Vue.use(ElementUI)
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app2',
    router,
    render: h => h(App),
    mounted() {
      router.replace(location.hash.replace('#/es', ''))
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
  let el = document.getElementById('app2')

  if (!el) {
    el = document.createElement('div')
    el.id = 'app2'
    document.getElementById('container').appendChild(el)
  }
  return el
}
