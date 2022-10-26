<script setup lang="ts">
export interface CardEsthetic {
  image: string;
  description: string;
  title: string;
}

const props = defineProps<{
  data: CardEsthetic;
}>();
</script>

<template>
  <div
    class="relative py-6 px-4 bg-gray-100 rounded-xl flex flex-col justify-center items-center border mb-16 border-white hover:border-title hover:bg-white hover:-translate-y-4 transition-all"
  >
    <router-link
      :to="{ name: 'single-esthetic', params: { slug: 'traitement' } }"
    >
      <img
        :src="data.image"
        class="md:h-36 md:w-36 h-32 w-32 object-cover rounded-full -mt-20"
        alt=""
      />
    </router-link>
    <router-link
      :to="{ name: 'single-esthetic', params: { slug: 'traitement' } }"
      class="font-bold text-xl md:text-2xl mt-4 text-center hover:text-title"
    >
      {{ data.title }}
    </router-link>
    <p class="text-center text-sm md:text-[16px] mt-2">
      {{ data.description }}
    </p>
    <router-link
      :to="{ name: 'single-esthetic', params: { slug: 'traitement' } }"
      class="uppercase text-sm md:text-lg font-semibold underline mt-3 hover:text-title transition-colors decoration-title underline-offset-8"
    >
      + En savoir plus
    </router-link>
  </div>
</template>
