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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
