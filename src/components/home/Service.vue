<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";
const modules = [Autoplay];

const items = [
  { image: img1, title: "Dermatologie" },
  { image: img2, title: "Médécine Esthétique" },
  { image: img3, title: "Comestique" },
];
</script>

<template>
  <section
    class="xl:w-2/3 sm:w-5/6 w-full mx-auto px-6 -mt-16 shadow-xl shadow-custom-yellow bg-white rounded-lg py-4"
  >
    <h1 class="font-medium text-xl md:text-3xl text-center">
      Mes domaines de compétences
    </h1>
    <swiper
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :slidesPerView="3"
      :spaceBetween="5"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
      class="mt-10"
      :modules="modules"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
        class="!h-56 w-64 rounded-lg p-3 relative overflow-hidden"
      >
        <img
          :src="item.image"
          class="h-3/4 w-full object-cover rounded-lg"
          alt=""
        />
        <h1 class="font-bold text-lg md:text-xl mt-4 text-center">
          {{ item.title }}
        </h1>
      </swiper-slide>
    </swiper>
  </section>
</template>
