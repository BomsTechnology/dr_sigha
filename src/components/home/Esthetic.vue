<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import type { CardEsthetic } from "@/components/EstheticCard.vue";
import EstheticCard from "@/components/EstheticCard.vue";
const items: Array<CardEsthetic> = [
  {
    image: img1,
    title: "Rajeunissement Facial",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img2,
    title: "Liposuccion / Liposculpture du corps",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img3,
    title: "Peeling",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img1,
    title: "Rajeunissement Facial",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img2,
    title: "Peeling",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img3,
    title: "Peeling",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
];
</script>
<template>
  <div class="bg-gray-50 w-full py-12 lg:px-32 px-4">
    <div class="flex items-center justify-center lg:justify-between">
      <div class="flex flex-col items-center lg:items-start">
        <h3
          class="lg:text-xl font-semibold text-title px-4 flex items-center space-x-4"
        >
          <span>
            <svg
              class="lg:h-8 lg:w-8 w-6 h-6"
              width="32"
              height="17"
              viewBox="0 0 32 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9.28757H8.87673L12.8884 1L19.6818 16L23.5387 9.28757H31"
                stroke="#4B9A77"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>Médécine Esthétique au Cameroun</span>
        </h3>
        <h1 class="text-2xl lg:text-5xl mt-2 font-bold">
          Découvrez nos traitements
        </h1>
      </div>
      <router-link
        :to="{ name: 'esthetic' }"
        class="bg-title px-5 py-4 text-white rounded-lg lg:block hidden text-sm md:text-xl hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <span>Voir tout les traitements</span>
      </router-link>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-24">
      <EstheticCard v-for="(item, index) in items" :key="index" :data="item" />
    </div>
    <div class="flex justify-center mt-4 lg:hidden">
      <button
        type="button"
        class="bg-title px-5 py-4 text-white rounded-lg text-sm md:text-xl hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <span>Voir tout les traitements</span>
      </button>
    </div>
  </div>
</template>
