import * as singleSpa from 'single-spa'
import { loadApp } from './helper'
import 'element-ui/lib/theme-chalk/index.css'
import { storeInstance } from './globalStore'

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

let hash

function inheritRoute() {
  // const vm = storeInstance.getState().vm
  const uri = window.location.hash
  const currentHash = uri.match(/(#\/.*?\/)/)[1] // eg: #/xx/

  if (hash !== currentHash) {
    hash = currentHash
    return
  }
  let newRoute = uri.replace(currentHash, '/')
  storeInstance.getState().vm._router.replace(newRoute)
}

window.onhashchange = (e) => {
  inheritRoute()
}
