<script lang="ts" setup>
const color = defineProps(['color'])
import ColorCirclePreview from '@/components/common/ColorCirclePreview.vue'
import ColorCopyButton from '@/components/common/ColorCopyButton.vue'
</script>
<template>
  <div class="flex flex-col gap-5 items-center justify-between" v-for="item in color" :key="item">
    <ColorCirclePreview :item="item" />
    <ColorCopyButton :custom-class="'flex flex-col w-full items-center'" :item="item" />
  </div>
</template>
