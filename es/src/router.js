import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '#/es',
  routes: [
    {
      path: '/es',
      name: 'es',
      component: () => import(/* webpackChunkName: "es.list" */ './pages/es.vue'),
    },
    // {
    //   path: '/es-add',
    //   name: 'es-add',
    //   component: () => import(/* webpackChunkName: "add" */ './pages/es-add.vue'),
    // },
    {
      path: '/esmonitor',
      name: 'esmonitor',
      component: () => import(/* webpackChunkName: "es.monitor" */ './pages/esmonitor.vue'),
    },
  ]
})