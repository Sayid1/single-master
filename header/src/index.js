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
export function bootstrap(props) {
	return reactLifecycles.bootstrap(props);
}

export function mount(props) {
	return reactLifecycles.mount(props);
}

export function unmount(props) {
	return reactLifecycles.unmount(props);
}
