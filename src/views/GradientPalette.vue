<script lang="ts" setup>
import ColorCopyButton from '@/components/ColorCopyButton/ColorCopyButton.vue'
import { fetchPalettes, colorPalettes } from '@/lib/fetchPalettes'
import { computed, readonly, shallowRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
colorPalettes.value = []
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
      class="flex-center rounded-3xl justify-between w-full aspect-square"
      v-for="({ colors }, index) in colorPalettes"
      :key="index"
      :style="{ background: `linear-gradient(to right, ${colors.join(',')}` }"
    >
      <ColorCopyButton
        class="w-full h-full bg-[rgba(225,225,255,.2)] ease-in duration-300 opacity-0 hover:opacity-100 grid place-content-center"
        v-for="color in colors"
        :key="color"
        :color="color"
      />
    </div>
  </div>
  <div ref="lastElement"></div>
</template>
