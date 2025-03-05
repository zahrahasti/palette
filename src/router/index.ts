import { createRouter, createWebHistory } from 'vue-router'
import CreatePallete from '@/pages/CreatePallete.vue'
import HomePage from '@/pages/HomeView.vue'
import CollectionPalette from '@/pages/CollectionPalette.vue'
import GradientPalette from '@/pages/GradientPalette.vue'

const router = createRouter({
  strict: true,
  sensitive: true,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: HomePage },
    { name: 'create', path: '/create', component: CreatePallete },
    { name: 'collection', path: '/collection', component: CollectionPalette },
    { name: 'gradient', path: '/gradient', component: GradientPalette }
  ]
})

export default router
