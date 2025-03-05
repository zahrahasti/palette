<script lang="ts" setup>
import TheNav from './components/layouts/TheNav.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="min-h-[100vh] p-5">
    <div class="mx-auto lg:w-5/6">
      <TheNav />
      <main class="gap-normal h-max w-full">
        <RouterView />
      </main>
    </div>
  </div>
</template>
