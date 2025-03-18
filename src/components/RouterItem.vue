<script lang="ts" setup>
const props = defineProps({
  router: {
    type: String,
    default: '/'
  },
  output: {
    type: String,
    default: 'Home'
  },
  iconId: String
})
</script>

<template>
  <RouterLink
    active-class="font-semibold  text-blue-500"
    class="p-r-small font-medium flex gap-2 items-center flex-col md:flex-row"
    :to="props.router"
  >
    <span :class="props.iconId" class="text-4xl"></span>
    {{ props.output }}
  </RouterLink>
</template>
