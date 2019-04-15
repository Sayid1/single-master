import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '#/cloudServer',
  routes: [
    {
      path: '/cloud-host',
      name: 'cloud-host',
      component: () => import(/* webpackChunkName: "cloudServer.cloud-host" */ './pages/cloud-host.vue'),
    },
    // {
    //   path: '/cloud-host-add',
    //   name: 'cloud-host-add',
    //   component: () => import(/* webpackChunkName: "cloud-host-add" */ './pages/cloud-host-add.vue'),
    // },
    {
      path: '/mirror-image',
      name: 'mirror-image',
      component: () => import(/* webpackChunkName: "cloudServer.mirror-image" */ './pages/mirror-image.vue'),
    },
  ]
})