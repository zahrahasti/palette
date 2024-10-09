<script lang="ts" setup>
import { ref } from 'vue'
import TheLogo from './subcomponents/TheLogo.vue'
import { RouterLink } from 'vue-router'

let showList = ref(true)
</script>

<template>
  <div class="flex items-center justify-between mx-auto py-[.8rem]">
    <TheLogo />
    <div class="relative">
      <button
        @click="
          () => {
            showList = !showList
          }
        "
        class="md:hidden block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75m0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <ul
        :class="`${showList ? 'block' : 'hidden'}`"
        class="absolute z-20 text-base-gray font-semibold bg-white space-y-5 md:space-y-0 right-5 md:flex md:relative shadow-lg md:shadow-none w-max p-5 md:w-full justify-between gap-20"
      >
        <li>
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li>
          <RouterLink to="/new"> New </RouterLink>
        </li>
        <li>
          <RouterLink to="/gradient"> Gradient </RouterLink>
        </li>
        <li>
          <RouterLink to="/create"> Create </RouterLink>
        </li>
        <li>
          <RouterLink to="/collection"> Collection </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
