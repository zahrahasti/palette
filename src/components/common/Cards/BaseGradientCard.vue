<script lang="ts" setup>
import { getRandomHexColor } from '@/assets/modules/getRandomHexColor'
import GradientHex from '@/components/Base/GradientHex.vue'
import ColorCopy from '@/components/common/ColorCopyButton.vue'
function returnTwoRandomColor() {
  const randomColor1 = getRandomHexColor()
  const randomColor2 = getRandomHexColor()
  return [randomColor1, randomColor2]
}
const colors = [returnTwoRandomColor(), returnTwoRandomColor()]
</script>
<template>
  <div class="flex flex-col" v-for="(color, index) in colors" :key="index">
    <div
      :style="{ background: `linear-gradient(to right,${color})` }"
      class="rounded-3xl overflow-hidden group relative aspect-square w-full flex justify-between items-center"
    ></div>

    <!-- search for more information -->
    <div class="flex my-5 justify-between">
      <ColorCopy
        :customClass="`flex flex-row-reverse flex-row`"
        :customClassBtn="`w-[6rem]`"
        v-for="item in color"
        :key="item"
        :item="item"
      />
    </div>
  </div>
</template>
