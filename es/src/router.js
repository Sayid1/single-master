import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/es',
    },
    {
      path: '/es',
      name: 'es',
      component: () => import(/* webpackChunkName: "es" */ './views/ES'),
    },
    {
      path: '/es-add',
      name: 'es-add',
      component: () => import(/* webpackChunkName: "es.add" */ './views/ES-add'),
    },
    {
      path: '/esmonitor',
      name: 'esmonitor',
      component: () => import(/* webpackChunkName: "es.monitor" */ './views/ES-monitor'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "es.monitor" */ './views/ES-monitor/details'),
    },
  ],
});
