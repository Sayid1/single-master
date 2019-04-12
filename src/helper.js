import * as singleSpa from 'single-spa'
import GlobalEventDistributor from './globalEventDistributor'
import { storeInstance } from './globalStore'

const globalEventDistributor = new GlobalEventDistributor()

export const hashPrefix = prefix => location => location.hash.startsWith(`#/${prefix}`)

export async function loadApp(name, hash, appURL) {
  let customProps = {
    globalEventDistributor
  }

  // if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeInstance

    globalEventDistributor.registerStore(storeInstance)
  // }
  if (hash === true)
    singleSpa.registerApplication(name, () => SystemJS.import(appURL), () => () => true, customProps)
  else
    singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), customProps)
}