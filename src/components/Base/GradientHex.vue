<script lang="ts" setup>
// Define `colors` as an array of strings
const colors = defineProps(['colors'])
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()
</script>

<template>
  <div class="flex items-center" v-for="color in colors" :key="color">
    <span :style="{ background: color }" class="w-12 h-12 rounded-full" />
    <button
      type="button"
      class="duration-150 min-w-36 text-[#404F65] font-semibold"
      v-on:click="copy(color)"
    >
      <p v-if="!copied" v-text="color" />
      <p v-else v-text="'Copied!'" />
    </button>
  </div>
</template>
