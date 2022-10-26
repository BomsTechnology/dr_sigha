<script setup lang="ts">
import { UserIcon, CalendarIcon } from "@heroicons/vue/24/outline";

export interface CardPost {
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

const props = defineProps<{
  data: CardPost;
}>();
</script>

<template>
  <div class="p-2 bg-white rounded-xl shadow">
    <router-link :to="{ name: 'single-post', params: { slug: 'mon-article' } }">
      <img
        :src="data.image"
        class="rounded-xl w-full h-80 object-cover"
        clas
        alt=""
      />
    </router-link>
    <div class="p-3">
      <a
        href="#"
        class="py-2 px-4 rounded-full inline-block text-sm bg-custom-yellow text-title border border-white font-semibold hover:underline transition-colors hover:bg-white hover:border-title"
      >
        {{ data.category }}
      </a>
      <router-link
        :to="{ name: 'single-post', params: { slug: 'mon-article' } }"
        class="mt-2 block text-xl font-bold hover:text-title transition-colors"
      >
        {{ data.title }}
      </router-link>
      <div class="flex datas-center mt-2 space-x-3">
        <div class="text-sm flex space-x-1 datas-center">
          <UserIcon class="h-4 w-4 text-title" /><span>{{ data.author }}</span>
        </div>
        <div class="text-sm flex space-x-1 datas-center">
          <CalendarIcon class="h-4 w-4 text-title" /><span>{{
            data.date
          }}</span>
        </div>
      </div>
      <router-link
        :to="{ name: 'single-post', params: { slug: 'mon-article' } }"
        class="uppercase text-sm font-semibold block underline mt-4 hover:text-title transition-colors decoration-title underline-offset-8"
      >
        + Lire plus
      </router-link>
    </div>
  </div>
</template>
