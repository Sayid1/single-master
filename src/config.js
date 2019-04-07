import * as singleSpa from 'single-spa'
import * as isActive from './activityFns.js'
import GlobalEventDistributor from './globalEventDistributor'


singleSpa.registerApplication('header', SystemJS.import('header!sofe'), isActive.header)
singleSpa.registerApplication('slider', SystemJS.import('slider!sofe'), isActive.slider)
singleSpa.registerApplication('app3', SystemJS.import('app3!sofe'), isActive.app3)


async function init() {
    const globalEventDistributor = new GlobalEventDistributor()
}

singleSpa.start()
