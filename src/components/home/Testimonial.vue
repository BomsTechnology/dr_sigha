<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
const modules = [Autoplay, Navigation];
const items = [
  {
    content:
      "I want to express my appreciation for a very finely run and professional facility. Doctors always encouraged to ask questions",
    discipline: "Dermatologie",
    name: "Marcelin Sigha",
    start: 4,
  },
  {
    content:
      "I want to express my appreciation for a very finely run and professional facility. Doctors always encouraged to ask questions",
    discipline: "Dermatologie",
    name: "Marcelin Sigha",
    start: 4,
  },
  {
    content:
      "I want to express my appreciation for a very finely run and professional facility. Doctors always encouraged to ask questions",
    discipline: "Dermatologie",
    name: "Marcelin Sigha",
    start: 4,
  },
  {
    content:
      "I want to express my appreciation for a very finely run and professional facility. Doctors always encouraged to ask questions",
    discipline: "Dermatologie",
    name: "Marcelin Sigha",
    start: 4,
  },
];
</script>

<template>
  <div class="bg-gray-50 w-full py-12 lg:px-32 px-4" id="testimonial">
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
          <span>Témoignages</span>
        </h3>
        <h1 class="text-2xl lg:text-5xl mt-2 font-bold">
          Ce que disent nos patients
        </h1>
      </div>
      <button
        type="button"
        class="bg-title px-5 py-4 text-white rounded-lg lg:block hidden text-sm md:text-xl hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <span>Laisser un témoignage</span>
      </button>
    </div>
    <swiper
      :navigation="true"
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
      class="lg:mt-24 mt-16 !p-8"
      :modules="modules"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
        class="!h-96 bg-white shadow rounded-xl p-7"
      >
        <div class="h-1/6">
          <svg
            width="42"
            height="36"
            viewBox="0 0 42 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41 18L26 33V3H41V18Z" stroke="#FCF894" stroke-width="2" />
            <path d="M38 15L23 30V0H38V15Z" fill="#4B9A77" />
            <path d="M18 18L3 33V3H18V18Z" stroke="#FCF894" stroke-width="2" />
            <path d="M15 15L0 30V0H15V15Z" fill="#4B9A77" />
          </svg>
        </div>
        <p class="h-4/6 py-2">" {{ item.content }} "</p>
        <div class="h-1/6">
          <div class="flex items-center justify-start space-x-1">
            <StarIcon
              v-for="gs in item.start"
              class="h-4 w-4 text-custom-yellow"
            />
            <StarIcon
              v-if="item.start < 5"
              v-for="ns in 5 - item.start"
              class="h-4 w-4 text-gray-200"
            />
          </div>
          <h1 class="font-bold">{{ item.name }}</h1>
          <h5 class="text-gray-500 text-sm">{{ item.discipline }}</h5>
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-center mt-4 lg:hidden">
      <button
        type="button"
        class="bg-title px-5 py-4 text-white rounded-lg text-sm md:text-xl hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <span>Laisser un témoignage</span>
      </button>
    </div>
  </div>
</template>
