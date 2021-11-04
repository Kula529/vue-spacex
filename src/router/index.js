import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/launches',
    name: 'Launches',
    component: () => import('../pages/Launches.vue'),
  },
  {
    path: '/rockets',
    name: 'Rockets',
    component: () => import('../pages/Rockets.vue'),
  },
  {
    path: '/ships',
    name: 'Ships',
    component: () => import('../pages/Ships.vue'),
  },
  {
    path: '/missions',
    name: 'Missions',
    component: () => import('../pages/Missions.vue'),
  },
  {
    path: '/payloads',
    name: 'Payloads',
    component: () => import('../pages/Payloads.vue'),
  },
  {
    path: '/dragons',
    name: 'Dragons',
    component: () => import('../pages/Dragons.vue'),
  },
  {
    path: '/capsules',
    name: 'Capsules',
    component: () => import('../pages/Capsules.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
