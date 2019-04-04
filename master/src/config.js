import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('header', SystemJS.import('header!sofe'), isActive.navbar)
// singleSpa.registerApplication('people', SystemJS.import('people!sofe'), isActive.people)
// singleSpa.registerApplication('planets', SystemJS.import('planets!sofe'), isActive.planets)

singleSpa.start()
