<template>
  <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-between gap-5">
    <div v-for="({ colors }, index) in colorPalettes" :key="index">
      <CardPalette :colors="colors" />
    </div>
    <div ref="lastElement"></div>
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, shallowRef } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import supabase from '@/lib/supabaseClient.ts'
import CardPalette from '@/components/common/Cards/ColorPalette/CardPalette.vue'
import type { ShallowRef } from 'vue'
// State
const colorPalettes: ShallowRef<{ colors: any }[]> = shallowRef([]) // Stores color palettes
const offset = shallowRef(0) // Track loaded data
const isLoading = shallowRef(false)
const lastElement = shallowRef(null) // Target for Intersection Observer

// Fetch Palettes (12 at a time)
const fetchPalettes = async () => {
  if (isLoading.value) return
  isLoading.value = true

  const { data, error } = await supabase
    .from('palettes')
    .select('colors')
    .range(offset.value, offset.value + 11)

  if (error) {
    //  Error handling
  } else if (data.length > 0) {
    colorPalettes.value = [...colorPalettes.value, ...data] // Append new palettes to existing ones
    offset.value += 3
  }

  // isLoading.value = false
  await nextTick()
}

// Intersection Observer to Detect Scroll
useIntersectionObserver(
  computed(() => lastElement.value),
  ([entry], _) => {
    if (entry?.isIntersecting) {
      fetchPalettes()
    }
  },
  { threshold: 1.0 }
)

// Initial Data Load
fetchPalettes()
</script>
