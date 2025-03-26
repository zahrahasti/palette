<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { updateLikedPalette, removeLikedPalette } from '@/stores/update.palettes'
const props = defineProps<{
  clicked: boolean
  colors: string[]
}>()

const propsValue = ref(props.clicked)
const colors = ref(props.colors).value
function toggleLikedPalette() {
  propsValue.value = !propsValue.value
  if (propsValue.value) {
    updateLikedPalette(colors)
  } else {
    removeLikedPalette(colors)
  }
}
</script>

<template>
  <button
    type="button"
    :class="{ 'bg-gray-100': propsValue }"
    class="button-default w-[7.3rem] h-[3.4rem] flex-center"
    @click="toggleLikedPalette"
    data-test="btn-like"
  >
    <span
      :class="{ 'bg-blue-500 fill-amber-50': propsValue }"
      class="icon-[ic--round-favorite] m-0 p-0 w-10 h-10"
    >
    </span>
    <span>Like</span>
  </button>
</template>

<style></style>
