<script lang="ts" setup>
import FooterUi from './components/layouts/Footer/FooterUi.vue'
import TheNav from './components/layouts/Nav/TheNav.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="p-10 mx-auto lg:w-5/6">
    <TheNav />
    <RouterView />
  </div>
  <FooterUi />
</template>
