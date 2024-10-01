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
    { name: 'Home', path: '/', component: VueHome },
    { name: 'Create', path: '/Create', component: CreatePallete },
    { name: 'New', path: '/New', component: NewPalette },
    { name: 'Collection', path: '/Collection', component: CollectionPalette },
    { name: 'Gradient', path: '/Gradient', component: GradientPalette }
  ]
})

export default router
