<script lang="ts" setup>
const { item } = defineProps<{ item: string }>()
</script>
<template>
  <div
    :style="{ backgroundColor: item }"
    class="h-full w-[3.5rem] mx-auto lg:w-[4.5rem] rounded-full"
  ></div>
</template>
