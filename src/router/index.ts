import { createRouter, createWebHistory } from 'vue-router'
import CreatePallete from '@/pages/CreatePallete.vue'
import VueHome from '@/pages/VueHome.vue'
import NewPalette from '@/pages/NewPalette.vue'
import CollectionPalette from '@/pages/CollectionPalette.vue'
import GradientPalette from '@/pages/GradientPalette.vue'

const router = createRouter({
  strict: true,
  sensitive: true,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: VueHome },
    { name: 'create', path: '/create', component: CreatePallete },
    { name: 'new', path: '/new', component: NewPalette },
    { name: 'collection', path: '/collection', component: CollectionPalette },
    { name: 'gradient', path: '/gradient', component: GradientPalette }
  ]
})

export default router
