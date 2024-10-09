<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'
const { colors, style } = defineProps({
  colors: Array as PropType<string[]>, // Correctly defining colors as an array of strings
  style: Number
})
const activeColors = ref(colors)

type Style = Partial<{ customClass: string }>

const firstCustomStyle: Style = {
  customClass: 'flex-col gap-5'
} satisfies Style

const secondCustomStyle: Style = {
  customClass: 'flex-row-reverse items-center'
} satisfies Style

const defaultStyle: Style = style === 1 ? firstCustomStyle : secondCustomStyle
</script>

<template>
  <div
    class="flex mx-auto"
    :class="defaultStyle.customClass"
    v-for="(color, index) in activeColors"
    v-bind:key="index"
  >
    <span class="w-32 text-center">{{ color }}</span>
    <input
      type="color"
      name="color picker"
      id="color-picker"
      class="appearance-none w-16 mx-auto rounded-[100px] h-16 outline-0 border-none"
      :value="color"
      v-on:input="
        (event) => {
          const input = event.target as HTMLInputElement
          if (activeColors) activeColors[index] = input.value
        }
      "
    />
  </div>
</template>

<style scoped>
input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type='color']::-webkit-color-swatch {
  border: none;
  border-radius: 10px;
}
</style>
