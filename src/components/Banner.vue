<script setup lang="ts">
import banner from "@/assets/images/banner.jpg";
import { HomeIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
export interface Link {
  label: string;
  route: string;
  params?: string;
}
const props = defineProps({
  title: { required: true, type: String },
  links: {
    type: Array<Link>,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full lg:h-60 border mt-16 lg:mt-28"
    :style="{ 'background-image': `url(${banner})` }"
  >
    <div
      class="w-full h-full bg-title/90 flex flex-col justify-end items-center space-y-6 py-10 text-white"
    >
      <h1
        class="lg:text-[40px] text-3xl font-semibold flex items-center space-x-2"
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
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span>{{ title }}</span>
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
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </h1>
      <div class="flex items-center">
        <router-link :to="{ name: 'home' }" class="hover:underline">
          <HomeIcon class="h-4 w-4" />
        </router-link>
        <span><ChevronRightIcon class="h-4 w-4" /></span>
        <span
          v-for="(link, index) in links"
          :key="index"
          class="text-xs lg:text-sm flex items-center"
        >
          <router-link
            v-if="link.route"
            :to="{ name: link.route }"
            class="hover:underline"
            >{{ link.label }}</router-link
          >
          <span v-else>{{ link.label }}</span>
          <span :class="links.length == index + 1 ? 'hidden' : ''"
            ><ChevronRightIcon class="h-4 w-4"
          /></span>
        </span>
      </div>
    </div>
  </div>
</template>
