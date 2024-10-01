<script setup lang="ts">
import ColorCirclePreview from '@/components/common/ColorCirclePreview.vue'
import InputCreator from '@/components/BaseInputCreator/inputCreator.vue'
import DowloadPaletteBtn from '@/components/common/Buttons/DowloadPaletteBtn.vue'
import LikeBtn from '@/components/common/Buttons/LikeBtn.vue'
import { ref } from 'vue'
const colors = ref(['#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE'])
const gradientColors = ref(['#EEEEEE', '#999999'])
const paletteLikedStatus = ref(false)
</script>
<template>
  <article class="mx-auto md:w-5/6 lg:w-4/5 grid place-content-center md:grid-cols-2 gap-10 my-20">
    <section>
      <h1 class="text-[2rem] font-semibold my-5">Create new palette</h1>

      <div class="w-full grid grid-rows-7 aspect-square shadow-md rounded-3xl p-10 space-y-5">
        <div
          class="grid grid-cols-4 row-span-5 w-full gap-5 text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white"
        >
          <ColorCirclePreview v-for="color in colors" v-bind:key="color" :item="color" />
        </div>
        <div class="grid grid-cols-4">
          <InputCreator :customClass="`flex-col gap-5`" :colors="colors" />
        </div>
      </div>
      <div class="flex justify-between mt-5 items-center">
        <LikeBtn :clicked="paletteLikedStatus" :colors="colors" />
        <DowloadPaletteBtn :colors="colors" />
      </div>
    </section>
    <section>
      <h1 class="text-[2rem] font-semibold my-5">Create new Gradient palette</h1>
      <div class="w-full grid grid-rows-7 aspect-square space-y-5">
        <div class="flex row-span-5 w-full flex-col justify-between aspect-square">
          <div
            :style="{ background: `linear-gradient(to right,${gradientColors})` }"
            class="rounded-3xl overflow-hidden group relative aspect-square w-full flex justify-between items-center"
          ></div>
        </div>
      </div>
      <div class="flex justify-between h-max gap-10 items-center mt-5">
        <InputCreator :customClass="'flex-row-reverse items-center'" :colors="gradientColors" />
        <button class="btn btn-custom" type="button">Save</button>
      </div>
    </section>
  </article>
</template>
