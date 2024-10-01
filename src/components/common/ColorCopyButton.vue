<script lang="ts" setup>
const { item, customClass, customClassBtn } = defineProps(['item', 'customClass', 'customClassBtn'])
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()
</script>
<template>
  <div class="flex gap-5" :class="customClass">
    <button
      type="button"
      class="duration-150 text-base-gray font-semibold"
      :class="customClassBtn"
      v-on:click="copy(item.slice(1))"
    >
      <span v-if="!copied" v-text="item.slice(1)" />
      <span v-else v-text="`Copied!`" />
    </button>
    <div
      :style="{ backgroundColor: item }"
      class="w-[4rem] min-h-[4rem] rounded-full aspect-square"
    ></div>
  </div>
</template>
