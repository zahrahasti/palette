<script setup lang="ts">
import ColorCopyPreview from '@/components/common/ColorPreviewAndCopy.vue'
import { ref } from 'vue'
import LikeBtn from '@/components/common/Buttons/LikeBtn/LikeBtn.vue'
import DowloadPaletteBtn from '@/components/common/Buttons/DowloadPaletteBtn/DowloadPaletteBtn.vue'
const props = defineProps({
  colors: {
    type: Array<string>,
    required: true,
    default: []
  },
  reactiveCliked: {
    type: Boolean,
    default: false
  }
})

const activated = ref(props.reactiveCliked)
</script>
<template>
  <div class="card-base flex flex-col aspect-square w-full">
    <div
      class="w-full rounded-3xl shadow-md px-10 py-12 grid grid-cols-4 gap-5 justify-between text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white aspect-square"
    >
      <ColorCopyPreview v-for="color in props.colors" v-bind:key="color" :color="color" />
    </div>
    <div class="flex-center w-full gap-3 mt-5">
      <LikeBtn :clicked="activated" :colors="props.colors" />
      <DowloadPaletteBtn :colors="props.colors" />
    </div>
  </div>
</template>
