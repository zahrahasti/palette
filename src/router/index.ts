import { createRouter, createWebHistory } from 'vue-router'
import CreatePallete from '@/views/CreatePallete.vue'
import HomePage from '@/views/HomeView.vue'
import CollectionPalette from '@/views/CollectionPalette.vue'
import GradientPalette from '@/views/GradientPalette.vue'
import TagColor from '@/views/TagColor.vue'
import NotFound from '@/views/NotFound.vue'
const router = createRouter({
  strict: true,
  sensitive: true,
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: HomePage },
    { name: 'create', path: '/create', component: CreatePallete },
    { name: 'collection', path: '/collection', component: CollectionPalette },
    { name: 'gradient', path: '/gradient', component: GradientPalette },
    { name: 'colors', path: '/colors/:id', component: TagColor, props: true },
    { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

export default router
