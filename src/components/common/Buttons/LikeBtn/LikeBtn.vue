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
    class="btn text-base-gray border-[1px] p-2 rounded-lg border-gray-200 flex-center gap-4 text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] btn-custom"
    @click="toggleLikedPalette"
    data-test="btn-like"
  >
    <span
      :class="{ 'text-red-500 bg-red-500 fill-amber-50': propsValue }"
      class="icon-[material-symbols-light--favorite-rounded] w-10 h-10"
    >
    </span>
    <span>Like</span>
  </button>
</template>
