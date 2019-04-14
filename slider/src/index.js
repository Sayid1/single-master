import Vue from 'vue'
import ElementUI  from 'element-ui'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'

Vue.use(ElementUI )
Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#slider',
    render: h => h(App),
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap,
]

export function mount(props) {
  createDomElement()
  return vueLifecycles.mount({
    ...props
  })
}

export const unmount = [
  vueLifecycles.unmount,
]

function createDomElement() {
  let el = document.getElementById('slider')

  if (!el) {
    el = document.createElement('div')
    el.id = 'slider'
    document.body.appendChild(el)
  }
  return el
}