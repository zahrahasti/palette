<script lang="ts" setup>
import { shallowRef } from 'vue'
import TheNav from './TheNav.vue'

const colors = ['red', 'blue', 'purple', 'yellow', 'orange', 'fuchsia', 'green', 'pink']
const showTagColor = shallowRef(false)
</script>

<template>
  <div class="flex-center border-b-[.05rem] py-5 border-gray-50 gap-20 md:gap-50">
    <picture>
      <source srcset="@/assets/Icon/desktop-logo.svg" media="(min-width: 768px)" />
      <img
        src="@/assets/Icon/mobile-logo.svg"
        alt="Palette website logo featuring a colorful paint palette"
      />
    </picture>

    <div class="isolate w-full relative">
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
            @input="showTagColor = true"
            @focus="showTagColor = true"
          />
        </form>
      </search>
      <div
        :style="{ display: showTagColor ? 'block' : 'none' }"
        class="absolute border-default mt-5 w-full text-base-gray bg-white rounded-b-3xl p-5"
      >
        <strong class="mb-10">colors</strong>
        <div class="flex flex-wrap gap-1.5">
          <RouterLink
            v-for="(color, index) in colors"
            :key="index"
            :to="`/colors/${color}`"
            class="small-color p-2 px-3 text-xl rounded-full"
          >
            <span class="w-6 h-6 rounded-full block" :style="{ backgroundColor: color }"></span>
            {{ color }}
          </RouterLink>
        </div>
      </div>
    </div>
    <TheNav />
  </div>
</template>
