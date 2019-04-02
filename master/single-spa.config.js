import { registerApplication, start } from 'single-spa'

registerApplication('navBar', () => import('./src/navBar/navBar.app'), () => true)