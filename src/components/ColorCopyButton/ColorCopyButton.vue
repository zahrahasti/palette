<script lang="ts" setup>
const props = defineProps({
  color: String,
  style: {
    default: 'flex-col-reverse',
    type: String
  }
})
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()
</script>
<template>
  <div class="gap-5 w-full flex items-center" :class="props.style">
    <slot />

    <button
      type="button"
      class="duration-150 flex text-base-gray font-semibold"
      v-if="props.color"
      v-on:click="copy(props.color.slice(1))"
    >
      <span v-if="!copied">
        {{ props.color.slice(1) }}
      </span>
      <span v-else> Copied! </span>
    </button>
  </div>
</template>
