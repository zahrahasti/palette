<script lang="ts" setup>
import TheLogo from './NavSystem/TheLogo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-between w-4/5 mx-auto py-[.8rem]">
    <TheLogo />
    <div>
      <ul class="flex w-full justify-between gap-20">
        <li>
          <RouterLink to="/"> Home </RouterLink>
        </li>
        <li>
          <RouterLink to="/New"> New </RouterLink>
        </li>
        <li>
          <RouterLink to="/Gradient"> Gradient </RouterLink>
        </li>
        <li>
          <RouterLink to="/Create"> Create </RouterLink>
        </li>
        <li>
          <RouterLink to="/Collection"> Collection </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
