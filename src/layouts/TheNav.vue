<script lang="ts" setup>
const routerLinkItems = [
  {
    iconId: 'icon-[fluent--home-20-filled]',
    router: '/',
    output: 'Home'
  },
  { iconId: 'icon-[solar--star-bold]', router: '/gradient', output: 'Gradient' },
  { iconId: 'icon-[solar--widget-add-bold]', router: '/create', output: 'Create' },
  {
    iconId: 'icon-[ic--round-favorite]',
    router: '/collection',
    output: 'Collection'
  }
]
</script>

<template>
  <div class="z-10 fixed left-1/2 -translate-x-1/2 md:inset-y-[85%] bottom-1.5 w-full md:w-5xl">
    <ul
      class="rounded-xl md:mb-12 bg-gray-100 shadow-2xl text-base-gray flex p-5 justify-around md:gap-20"
    >
      <li v-for="item in routerLinkItems" :key="item.iconId">
        <RouterLink
          active-class="font-semibold  text-blue-500"
          class="p-r-small font-medium flex gap-2 items-center flex-col md:flex-row"
          :to="item.router"
        >
          <span :class="item.iconId" class="text-4xl"></span>
          {{ item.output }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
