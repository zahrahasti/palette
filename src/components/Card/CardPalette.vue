<script setup lang="ts">
import BaseHexColorContainer from './CardPaletteSystem/BaseHexColorContainer.vue'
import { ref } from 'vue'
import LikeBtn from '@/components/common/likeBtn.vue'
import DowloadPaletteBtn from '@/components/common/DowloadPaletteBtn.vue'
const props = defineProps(['colors', 'reactiveCliked'])
const activated = ref(props.reactiveCliked)
</script>
<template>
  <div class="card-base flex flex-col aspect-square relative w-full">
    <div
      class="w-full rounded-3xl shadow-md px-10 py-12 grid grid-cols-4 gap-5 justify-between text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white aspect-square"
    >
      <BaseHexColorContainer v-for="color in props.colors" v-bind:key="color" :color="color" />
    </div>
    <div class="flex justify-between w-full gap-3 items-center mt-5">
      <LikeBtn :clicked="activated" :colors="props.colors" />
      <DowloadPaletteBtn :colors="props.colors" />
    </div>
  </div>
</template>
