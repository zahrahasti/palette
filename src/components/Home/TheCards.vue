<script lang="ts" setup>
import icon from './vueHomeIcon/icon.svg'
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
  <section class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8 lg:gap-5 gap-5">
    <div
      v-for="card in CardContext"
      :key="card.color"
      :style="{ backgroundColor: card.color }"
      class="text-white aspect-square flex flex-col justify-evenly rounded-3xl py-10 px-5"
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
        class="text-center px-4 py-2 block bg-white text-black rounded-full"
      >
        {{ card.btnContext }}
      </RouterLink>
    </div>
  </section>
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
