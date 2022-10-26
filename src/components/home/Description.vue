<script setup lang="ts">
import { EnvelopeIcon, CalendarIcon } from "@heroicons/vue/24/outline";
import bg from "@/assets/topography.svg";
</script>
<template>
  <div
    class="w-full bg-gray-50 py-8 px-4 mt-8 flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-10"
  >
    <div
      class="relative lg:mt-10 px-4 flex flex-col items-center justify-center"
    >
      <div
        class="lg:h-[450px] lg:w-80 p-8 bg-white shadow-xl hover:shadow-custom-yellow rounded-md"
        :style="{ 'background-image': `url(${bg})` }"
      >
        <img
          src="@/assets/images/img.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <router-link
        :to="{ name: 'contact' }"
        class="bg-title px-4 py-3 text-white rounded-lg -mt-5 flex items-center space-x-2 justify-center text-sm md:text-lg hover:bg-white hover:text-title hover:border-title border-white border transition-all"
      >
        <CalendarIcon class="h-5 w-5" />
        <span>Prenez Rendez-vous</span>
      </router-link>
    </div>
    <div
      class="lg:w-1/2 lg:h-2/3 lg:mt-10 text-justify p-4 flex flex-col items-center justify-center lg:text-lg text-sm"
    >
      <p
        class="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-line:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left"
      >
        Dr. Sigha Odette <br />
        elit. Blanditiis odit accusantium obcaecati, reprehenderit minima quasi
        optio ex aut repellendus, mollitia magnam dolor. Temporibus earum
        quisquam consequatur cumque facere est perspiciatis?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        expedita quos fugit debitis harum, quisquam eligendi voluptate dolorum
        eum velit perspiciatis, rem corporis accusantium accusamus, nostrum
        natus! Eius, repellat asperiores!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        expedita quos fugit debitis harum, quisquam eligendi voluptate dolorum
        eum velit perspiciatis, rem corporis accusantium accusamus, nostrum
        natus! Eius, repellat asperiores!
      </p>
    </div>
  </div>
</template>
