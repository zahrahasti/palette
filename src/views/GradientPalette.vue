<script lang="ts" setup>
import ColorCopyButton from '@/components/ColorCopyButton/ColorCopyButton.vue'
import { fetchPalettes, colorPalettes } from '@/lib/fetchPalettes'
import { computed, readonly, shallowRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
const lastElement = shallowRef(null)
const homePageTagColor = readonly({ tagColor: 'gradient' })
useIntersectionObserver(
  computed(() => lastElement.value),
  ([entry], _) => {
    if (entry?.isIntersecting) {
      fetchPalettes(homePageTagColor.tagColor)
    }
  }
)
</script>
<template>
  <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-between gap-5">
    <div
      class="flex flex-col w-full aspect-square"
      v-for="({ colors }, index) in colorPalettes"
      :key="index"
    >
      <div
        class="w-full aspect-square"
        :style="{ background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }"
      ></div>
      <div class="flex-center mt-5">
        <ColorCopyButton v-for="(color, index) in colors" :key="index" :color="color" />
      </div>
    </div>
  </div>
  <div ref="lastElement"></div>
</template>
