<script lang="ts" setup>
const color = defineProps(['color'])
import ColorCirclePreview from '@/components/ColorCirclePreview.vue'
import ColorCopyButton from '@/components/ColorCopyButton/ColorCopyButton.vue'
</script>
<template>
  <div class="flex flex-col gap-5 items-center justify-between" v-for="item in color" :key="item">
    <ColorCirclePreview :item="item" />
    <ColorCopyButton :item="item" />
  </div>
</template>
