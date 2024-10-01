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
    :class="propsValue ? `bg-gray-100` : ''"
    class="btn btn-like text-center text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] btn-custom"
    @click="toggleLikedPalette"
  >
    <span>
      <svg
        :class="propsValue ? `text-black` : 'text-white'"
        class="stroke-[1rem] stroke-black w-[2rem] h-[2rem]"
      >
        <use href="@/assets/Icon/icon.svg#like"></use>
      </svg>
    </span>
    <span>Like</span>
  </button>
</template>
