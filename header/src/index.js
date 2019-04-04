import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Header from './root.component'


const domElementGetter = () => {
  let el = document.getElementById('header')
  if (!el) {
    el = document.createElement('div')
    el.id = 'header'
    document.getElementById('container').appendChild(el)
  }
  return el
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  domElementGetter
})

export const bootstrap = [
  reactLifecycles.bootstrap,
]

export const mount = [
  reactLifecycles.mount,
]

export const unmount = [
  reactLifecycles.unmount,
]

export const unload = [
  reactLifecycles.unload,
]
