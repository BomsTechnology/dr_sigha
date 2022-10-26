<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import { ShoppingBagIcon } from "@heroicons/vue/24/solid";

const items = [
  {
    image: img1,
    title: "Lait de toilette",
  },
  {
    image: img2,
    title: "Crême anti-rides",
  },
  {
    image: img3,
    title: "Crême anti-tâches",
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
          <span>Bel Ann Cosmetic</span>
        </h3>
        <h1 class="text-2xl lg:text-5xl mt-2 font-bold">
          Découvrez nos Produits
        </h1>
      </div>
      <router-link
        :to="{ name: 'bel-ann-cosmetic' }"
        class="bg-title px-5 py-4 text-white rounded-lg lg:block hidden text-sm md:text-xl hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <span>Voir tout les produits</span>
      </router-link>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative py-4 px-4 bg-gray-100 rounded-xl flex flex-col justify-center items-center border border-white hover:border-title hover:bg-white transition-all"
      >
        <img
          :src="item.image"
          class="h-60 object-cover rounded-xl w-full cursor-pointer"
          alt=""
        />
        <h1 class="font-bold text-xl md:text-2xl mt-4 text-center">
          {{ item.title }}
        </h1>
        <button
          type="button"
          class="uppercase text-sm md:text-lg px-3 py-1 rounded-md font-semibold mt-3 flex items-center justify-center space-x-2 border-title border-2 hover:text-title transition-colors"
        >
          <ShoppingBagIcon class="h-6 w-5" /> <span>Je commande</span>
        </button>
      </div>
    </div>
  </div>
</template>
