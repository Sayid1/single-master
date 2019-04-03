import React from 'react'
import ReactDom from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Header from './root.component'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  domElementGetter
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]

export const unload = [reactLifecycles.unload]

const domElementGetter = () => {
  let el = document.querySelector('#header')
  if (!el) {
    el = document.createElement('div')
    el.id = 'header'
    document.body.appendChild(el)
  }
  return el
}