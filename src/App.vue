<script lang="ts" setup>
import TheHeader from './layouts/TheHeader.vue'
import { RouterView } from 'vue-router'
const routerLinkItems = [
  {
    iconId: 'icon-[fluent--home-20-filled]',
    router: '/',
    output: 'Home'
  },
  { iconId: 'icon-[solar--star-bold]', router: '/gradient', output: 'Gradient' },
  { iconId: 'icon-[solar--widget-add-bold]', router: '/create', output: 'Create' },
  { iconId: 'icon-[ic--round-favorite]', router: '/collection', output: 'Collection' }
]
</script>
<template>
  <div class="min-h-[100vh] p-5">
    <div class="mx-auto lg:w-5/6">
      <TheHeader />
      <main class="gap-normal h-max w-full my-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>
