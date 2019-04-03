import { registerAppcalition, start } from 'single-spa'
import * as activityFns from './activityFns'

registerAppcalition('header', SystemJs.import('header!sofe'), activityFns.header)

start()