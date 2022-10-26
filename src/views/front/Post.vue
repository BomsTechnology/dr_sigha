<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import Banner from "@/components/Banner.vue";
import type { Link } from "@/components/Banner.vue";
import type { CardPost } from "@/components/PostCard.vue";
import PostCard from "@/components/PostCard.vue";
const links: Array<Link> = [
  {
    label: "Actualités",
    route: "post",
  },
];

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
  <Banner :links="links" :title="'Articles & Ressources'" />
  <div class="bg-gray-50 w-full py-8 lg:px-32 px-4">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-24">
      <PostCard v-for="(item, index) in items" :key="index" :data="item" />
    </div>
  </div>
</template>
