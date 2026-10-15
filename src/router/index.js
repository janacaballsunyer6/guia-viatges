import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DestinacionsView from '../views/DestinacionsView.vue'
import SobreView from '../views/SobreView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/destinacions',
      component: DestinacionsView,
    },
    {
      path: '/sobre',
      component: SobreView,
    },
  ],
})

export default router