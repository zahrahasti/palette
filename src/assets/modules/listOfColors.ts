import { ref } from 'vue'

export const listOfBaseColors = ref<{ [key: string]: string }>({
  gray: '#808080',
  red: '#FF0000',
  blue: '#0000FF',
  maroon: '#800000',
  yellow: '#FFFF00',
  olive: '#808000',
  lime: '#00FF00',
  green: '#008000',
  pink: '#FFC0CB',
  purple: '#800080',
  orange: '#FFA500'
})
