import * as singleSpa from 'single-spa'
import * as isActive from './activityFns.js'
import GlobalEventDistributor from './globalEventDistributor'
import { loadApp } from './helper'


singleSpa.registerApplication('header', SystemJS.import('header!sofe'), isActive.header)
singleSpa.registerApplication('slider', SystemJS.import('slider!sofe'), isActive.slider)
singleSpa.registerApplication('app3', SystemJS.import('app3!sofe'), isActive.app3)


async function init() {
    const globalEventDistributor = new GlobalEventDistributor()
    const loadingPromise = []

    loadingPromise.push(loadApp('header', '/header', '/app-header/header.js', '/app-header/store.js', globalEventDistributor))

}

singleSpa.start()
