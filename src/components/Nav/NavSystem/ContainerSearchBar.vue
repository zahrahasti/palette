<script lang="ts" setup>
import SearchInput from '../NavSystem/SearchInput.vue'
import icon from '@assets/Icon/icon.svg'
const listColorTagsExist = defineProps({
  listColorTagsExist: Boolean
})
</script>

<template>
  <div
    class="flex w-2/3 px-5 rounded-full gap-3 border-2 border-gray-800 h-full relative items-center text-gray-800"
  >
    <svg class="text-black w-[1.8rem] h-[1.8rem]">
      <use href="@assets/Icon/icon.svg#search"></use>
    </svg>
    <SearchInput />
  </div>
</template>
