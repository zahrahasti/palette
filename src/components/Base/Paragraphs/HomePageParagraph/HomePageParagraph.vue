<script lang="ts" setup>
const title = 'Color Palette Generator'
const words = title.split('')
</script>
<template>
  <span
    :style="`--i:${(i + 1) * 100}ms`"
    class="text-white opacity-0 show"
    v-for="(word, i) in words"
    :key="word"
    v-text="word"
  />
</template>

<style scoped>
.show {
  animation: show var(--i) forwards ease-in 1;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
