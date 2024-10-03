<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useInputStore } from '@/stores/input'
import { listOfBaseColors } from '@/assets/modules/listOfColors'
import { vOnClickOutside } from '@vueuse/components'
import TagColors from './TagColors.vue'
let colors = ref(Object.keys(listOfBaseColors.value))
const showListColor = ref(false)
const searchQuery = ref('')
const defoneInputStoreValue = useInputStore()
function closeColorList() {
  showListColor.value = false
}

const filteredColors = computed(() => {
  if (!searchQuery.value) {
    return colors.value
  }
  return colors.value.filter((color) =>
    color.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div
    class="w-full mx-auto relative"
    @click="showListColor = true"
    v-on-click-outside="closeColorList"
  >
    <form
      class="w-full border-2 border-black shadow-sm h-[4rem] rounded-full flex items-center px-4 gap-5"
    >
      <label for="search">
        <svg class="text-black w-[1.8rem] h-[1.8rem]">
          <use href="@/assets/Icon/icon.svg#search"></use>
        </svg>
      </label>
      <input
        type="search"
        aria-label="search bar"
        id="search"
        v-model="searchQuery"
        class="input w-full h-full z-[3] py-[.8rem] bg-transparent duration-100 outline-none"
        placeholder="search Palette"
        maxlength="25"
        @focus="showListColor = true"
      />
    </form>

    <Transition>
      <TagColors
        v-if="showListColor"
        :colors="filteredColors"
        :show-list-color="showListColor"
        @setTagColor="
          (color) => {
            defoneInputStoreValue.updateHexColor(color)
          }
        "
      />
    </Transition>
  </div>
</template>
