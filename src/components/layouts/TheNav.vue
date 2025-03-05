<script lang="ts" setup>
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
import RouterItem from '../RouterItem.vue'
</script>

<template>
  <div class="flex-center mt-6 mb-10 h-[50px]">
    <picture>
      <source srcset="../../assets/Icon/desktop-logo.svg" media="(min-width: 768px)" />
      <img
        src="../../assets/Icon/mobile-logo.svg"
        alt="Palette website logo featuring a colorful paint palette"
      />
    </picture>

    <div class="w-3/4">
      <search>
        <form
          action=""
          method="get"
          autocomplete="on"
          class="bg-gray-50 focus:shadow-md active:shadow-md h-[40px] flex-center p-2 rounded-full"
        >
          <label for="search" class="w-12 h-12 rounded-full grid place-content-center">
            <span class="icon-[iconamoon--search] text-base-gray text-3xl"></span>
          </label>
          <input
            class="w-full outline-hidden"
            type="search"
            name="search"
            id="search-color"
            inputmode="search"
            placeholder="Search for color palettes"
            enterykeyhint="search"
          />
        </form>
      </search>
    </div>
  </div>

  <div>
    <ul
      class="fixed rounded-xl mb-12 shadow-2xl bg-white w-5xl bottom-0 left-1/2 -translate-x-1/2 z-20 text-base-gray flex p-5 justify-around gap-20"
    >
      <li v-for="item in routerLinkItems" :key="item.iconId">
        <RouterItem :icon-id="item.iconId" :router="item.router" :output="item.output" />
      </li>
    </ul>
  </div>
</template>
