<script lang="ts" setup>
const props = defineProps({ item: String })
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()
</script>
<template>
  <div class="gap-5 flex flex-col w-full items-center">
    <button
      type="button"
      class="duration-150 text-base-gray font-semibold"
      v-if="props.item"
      v-on:click="copy(props.item.slice(1))"
    >
      <span v-if="!copied">
        {{ props.item.slice(1) }}
      </span>
      <span v-else> Copied! </span>
    </button>
    <div
      :style="{ backgroundColor: item }"
      class="w-[4rem] min-h-[4rem] rounded-full aspect-square"
    ></div>
  </div>
</template>
