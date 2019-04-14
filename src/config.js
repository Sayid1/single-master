import * as singleSpa from 'single-spa'
import { loadApp } from './helper'
import 'element-ui/lib/theme-chalk/index.css'
import { storeInstance } from './globalStore'
import { Loading } from 'parcelUtils!sofe'

async function init() {
  const loadingPromise = []

  loadingPromise.push(loadApp('header', true, '/header.js'))
  loadingPromise.push(loadApp('es', 'es', '/es.js'))
  loadingPromise.push(loadApp('cloudServer', 'cloudServer', '/cloudServer.js'))
  loadingPromise.push(loadApp('parcelUtils', 'parcelUtils', '/parcelUtils.js'))
  loadingPromise.push(loadApp('slider', true, '/slider.js'))

  await Promise.all(loadingPromise)
  singleSpa.start()
}
init()

let hash = window.location.hash && window.location.hash.match(/(#\/.*?\/)/)[1] || null
let loading
let loadedApp = new Set()

function inheritRoute() {
  const uri = window.location.hash
  const currentHash = uri.match(/(#\/.*?\/)/)[1] // eg: #/xx/

  if (hash !== currentHash) {
    hash = currentHash
    return
  }
  let newRoute = uri.replace(currentHash, '/')
  storeInstance.getState().vm._router.replace(newRoute)
}

window.onhashchange = () => inheritRoute()

window.addEventListener('single-spa:app-change', () => {
  const hash = window.location.hash
  if (!hash) return

  const app = hash.match(/\w+/)[0]
  if (!loadedApp.has(app)) loading = Loading.service({ text: '加载中...' })
  
  document.querySelector('#container').childNodes.forEach(e => {
    if (e && e.tagName === 'DIV' ) {
      if(window.location.hash.match(/\w+/)[0] === e.id) e.style.flex = 1
      else if (e.id !== 'slider') e.style.flex = 0
    }
  })
  loadedApp.add(app)
})

window.addEventListener('single-spa:routing-event', () => {
  if (loading) {
    loading.close()
    loading = null
  }
})