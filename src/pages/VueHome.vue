<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import ContainerSearchBar from '@/components/layouts/Nav/subcomponents/ContainerSearchBar.vue'
import TheCards from '@/components/Home/TheCards.vue'
import MainWrapper from '@/components/Base/MainWrapper.vue'
import HomePageParagraph from '@/components/Base/Paragraphs/HomePageParagraph.vue'
</script>
<template>
  <div class="mb-20 mx-auto text-center">
    <header class="grid my-32 lg:w-5/6 mx-auto">
      <div class="space-y-10 text-center mb-20">
        <h1 class="text-[3.5rem] font-bold md:text-[4.5rem]">
          Create Stunning Designs with Our Custom Color Palette Generator Online
        </h1>
        <p class="font-semibold text-wrap mx-auto w-max text-2xl md:text-3xl">
          Explore Endless Possibilities with Our
          <span
            class="relative mt-5 ml-5 text-center mx-auto block before:-translate-x-1/2 before:left-1/2 sm:inline-block w-max before:absolute before:scale-y-105 before:w-[110%] before:h-[110%] before:bg-yellow-500 before:-z-10 before:-skew-x-12"
          >
            <HomePageParagraph />
          </span>
        </p>
      </div>

      <div class="flex flex-col w-full mx-auto md:flex-row gap-10 items-center mt-24 mb-36">
        <ContainerSearchBar />
        <RouterLink
          to="/New"
          class="bg-blue-600 w-[20rem] px-6 py-3 block rounded-full text-white hover:opacity-95 hover:shadow-md"
        >
          Go for Palettes
        </RouterLink>
      </div>
    </header>
  </div>
  <TheCards />
  <RouterView />
</template>
