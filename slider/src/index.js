import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Slider from './root.component'

const domElementGetter = () => {
  let el = document.querySelector('#slider')
  if (!el) {
    el = document.createElement('div')
    el.id = 'slider'
    document.getElementById('container').appendChild(el)
  }
  return el
}

const reactLifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Slider,
  domElementGetter
})

export const bootstrap = [
  reactLifecycle.bootstrap
]

export const mount = [
  reactLifecycle.mount
]

export const unmount = [
  reactLifecycle.unmount
]

export const unload = [
  reactLifecycle.unload
] 