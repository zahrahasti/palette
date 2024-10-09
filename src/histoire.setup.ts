/// <reference types="histoire" />
import { defineSetupVue3 } from '@histoire/plugin-vue'
import type { Component } from 'vue'
import HistoireWrapper from './components/HistoireWrapper.story.vue'
import { pinia } from './sharedConfig'
import './assets/styles/index.css' // Import global CSS
export default defineSetupVue3(({ app, addWrapper }) => {
  app.use(pinia)
  addWrapper(HistoireWrapper as Component)
})
