import * as singleSpa from 'single-spa'

export const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

export async const loadApp = (name, hash, appURL, storeURL, globalEventDistributor) => {
    let storeModule = {}
    let customProps = { globalEventDistributor }

    try {
        storeModule = storeURL ? await SystemJS.import(storeURL) : {storeInstance: null}
    } catch (e) {
        console.error(`could not load store of app ${name}.`, e)
    }

    if(storeModule.storeInstance && globalEventDistributor) {
        customProps.store = storeModule.storeInstance

        globalEventDistributor.registerStore(storeModule.storeInstance)
    }

    singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), customProps)
}