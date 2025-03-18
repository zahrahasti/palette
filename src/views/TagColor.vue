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
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
const props = defineProps<{ id: string }>()
const route = useRoute()
onBeforeRouteLeave(() => {
  colorPalettes.value = []
})
onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    colorPalettes.value = []
    fetchPalettes(route.params.id as string)
  }
})
const lastElement = shallowRef(null)
const tagColor = readonly({ tagColor: route.params.id as string })
import { fetchPalettes, colorPalettes } from '@/lib/fetchPalettes'
fetchPalettes(tagColor.tagColor)

const observeSentinel = () => {
  if (!lastElement.value) return

  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry?.isIntersecting) {
        console.log('load more')
        await fetchPalettes(tagColor.tagColor)
      }
    },
    { rootMargin: '50px' }
  )

  observer.observe(lastElement.value)
}

onMounted(async () => {
  await fetchPalettes(tagColor.tagColor)
  nextTick(() => {
    observeSentinel()
  })
})
</script>
