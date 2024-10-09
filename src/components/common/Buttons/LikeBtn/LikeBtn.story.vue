<script lang="ts" setup>
import LikeBtn from './LikeBtn.vue'
const colors = ['#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE']

let clicked = true
</script>

<template>
  <Story>
    <Variant>
      <LikeBtn :colors="colors" :clicked="clicked" />
    </Variant>
  </Story>
</template>
