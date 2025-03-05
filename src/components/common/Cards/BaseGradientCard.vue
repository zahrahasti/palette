<script lang="ts" setup>
import ColorCopyButton from '@/components/common/ColorCopyButton/ColorCopyButton.vue'
function returnTwoRandomColor() {}
const colors = [returnTwoRandomColor(), returnTwoRandomColor()]
</script>
<template>
  <div class="flex flex-col w-full bg-red-200" v-for="(color, index) in colors" :key="index">
    <div
      :style="{ background: `linear-gradient(to right,${color})` }"
      class="rounded-3xl overflow-hidden group relative aspect-square w-full flex justify-between items-center"
    ></div>
    <div class="flex my-5 justify-between">
      <ColorCopyButton v-for="item in color" :key="item" :item="item" />
    </div>
  </div>
</template>
