<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import Banner from "@/components/Banner.vue";
import type { Link } from "@/components/Banner.vue";
import { ShoppingBagIcon } from "@heroicons/vue/24/solid";
const links: Array<Link> = [
  {
    label: "Bel Ann Cosmetic",
    route: "bel-ann-cosmetic",
  },
];

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
  {
    image: img1,
    title: "Lotion anti acnée",
  },
  {
    image: img2,
    title: "Gomage",
  },
];
</script>
<template>
  <Banner :links="links" :title="'Bel Ann Cosmetic'" />
  <div class="bg-gray-50 w-full py-12 lg:px-32 px-4">
    <p class="text-center py-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fugiat
      doloribus quae quasi praesentium velit, sit magnam, mollitia natus
      voluptates sint quod, officia nesciunt. Nobis facere quia dignissimos
      placeat optio perspiciatis architecto saepe repellat quaerat, natus,
      voluptas laborum inventore, ad ducimus ipsum. Sunt tenetur minima
      laudantium quia corporis beatae, itaque quis esse provident molestiae!
      Dolores architecto dolorum ad sed illum eveniet quisquam tempore modi
      aperiam nihil in perspiciatis quo, consectetur incidunt impedit nostrum
      vel assumenda voluptas fugiat aut, ullam ea. Culpa odio iste, aspernatur
      dignissimos incidunt ut autem earum molestiae optio error corporis ad illo
      enim veritatis cum itaque aliquid?
    </p>
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
