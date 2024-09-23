<script lang="ts" setup>
import TheNav from './components/Nav/TheNav.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="p-2 mx-auto md:w-5/6 lg:w-4/5">
    <TheNav />
    <RouterView />
  </div>
</template>
