<script lang="ts" setup>
import { listOfBaseColors } from '@/assets/modules/listOfColors'

const props = defineProps(['colors', 'showListColor'])
</script>

<template>
  <Transition>
    <div class="absolute left-4 flex flex-wrap gap-5 w-full mt-5" v-show="props.showListColor">
      <button
        v-for="color in colors"
        :key="color"
        class="flex gap-2 items-center border-gray-100 rounded-3xl border-2 p-1"
        tag="button"
        to="/New"
        @click="
          () => {
            $emit('setTagColor', listOfBaseColors[color])
            $router.push('/New')
          }
        "
      >
        <span :style="{ backgroundColor: color }" class="w-8 h-8 block rounded-full"></span>
        {{ color }}
      </button>
    </div>
  </Transition>
</template>
