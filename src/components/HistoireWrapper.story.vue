<script lang="ts" setup>
import { computed } from 'vue'
// import type { StoryWithMeta, VariantWithMeta } from '@/types/index'
// const props = defineProps<{
//   story: StoryWithMeta
//   variant?: VariantWithMeta
// }>()
// defineSlots<{ default: unknown }>()
// const hasWrapper = computed(() => {
//   const variantMeta = props.variant?.meta
//   const { meta: storyMeta, layout: storyLayout } = props.story

//   return (
//     storyLayout?.type !== 'grid' && storyMeta?.wrapper !== false && variantMeta?.wrapper !== false
//   )
// })
</script>
<template>
  <div class="grid min-h-screen place-items-center">
    <slot />
  </div>
</template>
