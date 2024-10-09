<script lang="ts" setup>
const props = defineProps({ item: String, style: Number })
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard()
type Style = Partial<{ customClass: string; customClassBtn: string }>

const firstCustomStyle: Style = {
  customClass: 'flex flex-col w-full items-center'
} satisfies Style

const secondCustomStyle: Style = {
  customClass: 'flex flex-row-reverse flex-row',
  customClassBtn: 'w-[6rem]'
} satisfies Style

const defaultStyle: Style = props.style === 1 ? firstCustomStyle : secondCustomStyle
</script>
<template>
  <div class="flex gap-5" :class="defaultStyle.customClass">
    <button
      type="button"
      class="duration-150 text-base-gray font-semibold"
      :class="defaultStyle.customClassBtn"
      v-if="item"
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
