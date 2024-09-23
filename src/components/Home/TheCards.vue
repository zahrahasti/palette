<script lang="ts" setup>
import icon from './vueHomeIcon/icon.svg'
// import computed from 'vue'
// const cssVars = computed(() => {
//   return {}
// })
type CardType = {
  href: string
  title: string
  text: string
  btnContext: string
  LinkTo: string
  color: string
  backgroundColor: string
}
const CardContext: CardType[] = [
  {
    href: `${icon}#star`,
    title: 'New',
    text: 'Find a beautiful color palette from Lora collection',
    btnContext: 'New Palette',
    LinkTo: '/New',
    color: 'blue',
    backgroundColor: '#ffe4e6'
  },
  {
    href: `${icon}#moon`,
    title: 'Gradient',
    text: 'Find a beautiful Gradient color palette from Lora  Collection',
    btnContext: 'Gradient Palette',
    LinkTo: '/Gradient',
    color: 'orange',
    backgroundColor: '#dbeafe'
  },
  {
    href: `${icon}#heart`,
    title: 'Collection',
    text: "Discover the combinations you've saved  ",
    btnContext: 'Collection Palette',
    LinkTo: '/Collection',
    color: 'purple',
    backgroundColor: '#f3e8ff'
  },
  {
    href: `${icon}#star`,
    title: 'Create',
    text: 'Create a beautiful color palette from Lora Creation',
    btnContext: 'Create Palette',
    LinkTo: '/Create',
    color: 'deeppink',
    backgroundColor: '#ffe4e6'
  }
]
</script>

<template>
  <div
    v-for="card in CardContext"
    :key="card.color"
    class="w-full aspect-square grid gap-2 grid-rows-5 grid-cols-5"
  >
    <div
      :style="{ backgroundColor: card.color }"
      class="col-start-1 text-white col-end-5 row-start-1 row-end-5 rounded-lg rounded-br-[5rem] py-10 px-5 w-full"
    >
      <div class="flex gap-2">
        <svg class="w-16 aspect-square text-white p-2 rounded-full">
          <use :href="card.href"></use>
        </svg>
        <h3 class="text-[2.5rem] font-bold">{{ card.title }}</h3>
      </div>

      <p class="font-semibold my-10">{{ card.text }}</p>
      <RouterLink
        :to="card.LinkTo"
        class="mt-10 text-center px-4 py-2 block bg-white text-black rounded-full"
      >
        {{ card.btnContext }}
      </RouterLink>
    </div>
    <div
      :style="`--color:${card.color};--color-mix:#fff;`"
      class="parent flex gap-2 col-start-1 col-end-6 row-start-5 row-end-6"
    >
      <div style="--percentage: 10%" class="lighter h-full aspect-square grid grid-cols-4"></div>
      <div style="--percentage: 40%" class="middle h-full aspect-square"></div>
      <div style="--percentage: 70%" class="darker h-full aspect-square"></div>
    </div>
    <div
      :style="`--color:${card.color};--color-mix:#000;`"
      class="flex flex-col gap-2 col-start-5 col-end-6 row-start-1 row-end-5"
    >
      <div style="--percentage: 80%" class="lighter w-full aspect-square"></div>
      <div style="--percentage: 40%" class="middle w-full aspect-square"></div>
      <div style="--percentage: 0%" class="darker w-full aspect-square"></div>
    </div>
  </div>
</template>

<style scoped>
.lighter {
  background: color-mix(in lab, var(--color) 100%, var(--color-mix) var(--percentage));
}

.middle {
  background: color-mix(in lab, var(--color) 100%, var(--color-mix) var(--percentage));
}
.darker {
  background: color-mix(in lab, var(--color) 100%, var(--color-mix) var(--percentage));
}
</style>
