<script lang="ts" setup>
const color = defineProps(['color'])
import { useClipboard } from '@vueuse/core'
import BaseColorShown from './BaseColorShown.vue'
const { copy, copied } = useClipboard()
</script>

<template>
  <div class="flex flex-col gap-5 items-center justify-between" v-for="item in color" :key="item">
    <BaseColorShown :item="item" />
    <button
      type="button"
      class="duration-150 text-[#404F65] font-semibold"
      v-on:click="copy(item.slice(1))"
    >
      <span v-if="!copied" v-text="item.slice(1)" />
      <span v-else v-text="`Copied!`" />
    </button>
    <div
      :style="{ backgroundColor: item }"
      class="w-[5rem] min-h-[5rem] rounded-full aspect-square"
    ></div>
  </div>
</template>
