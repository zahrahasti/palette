<template>
  <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-between gap-5">
    <div v-for="({ colors }, index) in colorPalettes" :key="index">
      <CardPalette :colors="colors" />
    </div>
  </div>
  <div ref="lastElement" class="mt-20 w-full"></div>
</template>

<script setup lang="ts">
import { readonly, shallowRef, nextTick } from 'vue'
import { onMounted } from 'vue'
import CardPalette from '@/components/Cards/ColorPalette/CardPalette.vue'

const lastElement = shallowRef(null)
const homePageTagColor = readonly({ tagColor: 'random' })
import { fetchPalettes, colorPalettes } from '@/lib/fetchPalettes'
fetchPalettes(homePageTagColor.tagColor)

const observeSentinel = () => {
  if (!lastElement.value) return

  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry?.isIntersecting) {
        console.log('load more')
        await fetchPalettes(homePageTagColor.tagColor)
      }
    },
    { rootMargin: '50px' }
  )

  observer.observe(lastElement.value)
}

onMounted(async () => {
  await fetchPalettes(homePageTagColor.tagColor)
  nextTick(() => {
    observeSentinel()
  })
})
</script>
