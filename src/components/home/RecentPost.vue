<script lang="ts" setup>
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import PostCard from "@/components//PostCard.vue";
import type { CardPost } from "@/components/PostCard.vue";
const items: Array<CardPost> = [
  {
    image: img1,
    category: "Dermatologie",
    title: "Helping your child cope with separation anxiety",
    author: "Dr. Sigha Odette",
    date: "25 Janvier 2022",
  },
  {
    image: img2,
    category: "Médécine Esthétique",
    title: "Helping your child cope with separation anxiety",
    author: "Dr. Sigha Odette",
    date: "25 Janvier 2022",
  },
  {
    image: img3,
    category: "Comestique",
    title: "Helping your child cope with separation anxiety",
    author: "Dr. Sigha Odette",
    date: "25 Janvier 2022",
  },
];
</script>
<template>
  <div class="bg-gray-50 w-full py-12 lg:px-32 px-4" id="testimonial">
    <div class="flex items-center flex-col justify-center">
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
        <span>Actualités</span>
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
      </h3>
      <h1 class="text-2xl lg:text-5xl mt-2 font-bold">Derniers articles</h1>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-24">
      <PostCard v-for="(item, index) in items" :key="index" :data="item" />
    </div>
    <div class="flex justify-center mt-8">
      <router-link
        :to="{ name: 'post' }"
        class="bg-title px-5 py-4 text-white rounded-lg text-xl hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <span>Plus d'articles</span>
      </router-link>
    </div>
  </div>
</template>
