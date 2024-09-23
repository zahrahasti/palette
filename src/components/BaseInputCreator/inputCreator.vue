<script lang="ts" setup>
import { ref } from 'vue'
const colors = defineProps(['colors', 'customClass'])
const activeGradientColors = ref(colors.colors)
</script>

<template>
  <div
    class="flex mx-auto"
    :class="customClass"
    v-for="(color, index) in activeGradientColors"
    v-bind:key="index"
  >
    <span v-text="color" class="w-32 text-center"></span>
    <input
    type="color"
    name="color picker"
    id="color-picker"
    class="appearance-none w-16 mx-auto rounded-[100px] h-16 outline-0 border-none"
    :value="color"
    v-on:input="(event) => {
      const input = event.target as HTMLInputElement; // TypeScript casting
      activeGradientColors[index] = input.value;
    }"
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
