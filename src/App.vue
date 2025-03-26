<script lang="ts" setup>
import TheHeader from './layouts/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="min-h-[100vh] p-5">
    <div class="mx-auto lg:w-5/6">
      <TheHeader />
      <main class="gap-normal h-max w-full my-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>
