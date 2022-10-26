<script setup lang="ts">
import { CalendarIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="section h-screen overflow-hidden md:py-0 py-8 lg:px-20 bg-white w-full flex md:flex-row flex-col justify-center lg:space-x-10 items-center"
  >
    <div class="">
      <h1 class="lg:text-6xl text-4xl font-bold">
        Dr.
        <span
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-title relative inline-block"
        >
          <span class="relative text-custom-yellow">SIGHA</span>
        </span>
        Odette
      </h1>
      <div
        class="mt-8 font-light text-xl lg:text-2xl flex flex-col items-center lg:items-start"
      >
        <h2>Dermatologie / Vénérologie</h2>
        <h2>Médécine Esthétique</h2>
        <h2>Cosmétique</h2>
        <router-link
          :to="{ name: 'contact' }"
          class="bg-title px-3 py-1 text-white rounded-lg mt-3 flex items-center space-x-2 justify-center text-lg hover:bg-white hover:text-title hover:border-title border-white border transition-all"
        >
          <CalendarIcon class="h-5 w-5" />
          <span>Prenez Rendez-vous</span>
        </router-link>
      </div>
    </div>
    <div class="relative lg:mt-0 mt-4">
      <div
        draggable="true"
        class="p-2 shadow rounded-full absolute md:top-60 top-44 bg-title text-white left-5 text-xs"
      >
        Dermatologie / Vénérologie
      </div>
      <div
        draggable="true"
        class="p-2 shadow rounded-full absolute md:top-2/3 top-32 lg:top-1/2 md:left-1/2 bg-custom-yellow text-xs"
      >
        Médécine Esthétique
      </div>
      <div
        draggable="true"
        class="p-2 shadow rounded-full absolute md:top-80 top-56 left-20 bg-custom-red text-white text-xs"
      >
        Cosmétique
      </div>
      <img
        src="@/assets/images/img.png"
        class="lg:w-full w-60 md:w-80 lg:h-full object-cover"
        alt=""
      />
    </div>
  </div>
</template>
