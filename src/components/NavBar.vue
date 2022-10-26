<script setup lang="ts">
import {
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  CalendarIcon,
} from "@heroicons/vue/24/outline";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const open = reactive({
  menu: false,
  submenu: false,
});

const isScroll = ref(false);
document.addEventListener("scroll", function () {
  let bodyTopPosition = document.body.getBoundingClientRect().top;
  if (bodyTopPosition < -150) {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
});

async function goTo(route: string): Promise<void> {
  open.menu = false;
  router.push({ name: route });
}
</script>
<template>
  <nav
    :class="[
      isScroll
        ? 'w-full lg:py-6 py-4 px-4 shadow-md z-20 fixed bg-white'
        : 'w-full lg:py-6 py-4 lg:px-10 px-4 lg:shadow-none z-10 fixed bg-white lg:bg-transparent',
    ]"
  >
    <div class="lg:px-4 flex lg:flex-row flex-col items-center justify-between">
      <div
        class="lg:w-72 flex justify-between items-center w-full lg:px-0 px-3"
      >
        <router-link
          :to="{ name: 'home' }"
          class="text-title font-satisfy lg:text-3xl md:2xl text-xl font-bold md:block hidden"
        >
          <span>Dr. SIGHA Odette</span>
        </router-link>
        <button
          type="button"
          @click="goTo('home')"
          class="text-title font-satisfy lg:text-3xl md:2xl text-xl font-bold md:hidden block"
        >
          <span>Dr. SIGHA Odette</span>
        </button>
        <div class="relative block lg:hidden" @click="open.menu = !open.menu">
          <transition-group
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 rotate-45"
            enter-to-class="opacity-1 rotate-0 "
            leave-active-class="transition duration-500 absolute"
            leave-from-class="opacity-1 rotate-0"
            leave-to-class="opacity-0 rotate-45"
            appear
          >
            <button
              v-if="!open.menu"
              type="button"
              class="hover:text-title text-gray-500 focus:text-title focus:outline-none"
              aria-label="toggle menu"
            >
              <Bars3Icon class="h-6 w-6 fill-current" />
            </button>
            <button
              v-if="open.menu"
              type="button"
              class="hover:text-title text-gray-500 focus:text-title focus:outline-none"
              aria-label="toggle menu"
            >
              <XMarkIcon class="h-6 w-6 fill-current" />
            </button>
          </transition-group>
        </div>
      </div>
      <div
        class="space-x-4 w-full xl:text-lg text-sm lg:block hidden text-right text-gray-500"
      >
        <div
          @mouseenter="open.submenu = true"
          @mouseleave="open.submenu = false"
          class="inline-block relative hover:bg-title rounded-t px-4 py-2 hover:text-white transition-colors"
        >
          <router-link :to="{ name: 'esthetic' }" class="block w-full"
            >Médécine Esthétique</router-link
          >
          <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0  scale-75"
            enter-to-class="opacity-1 scale-100"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 scale-100"
            leave-to-class=" opacity-0 scale-75"
          >
            <nav
              v-show="open.submenu"
              class="absolute w-60 break-words text-sm inline-block rounded bg-white shadow-md top-11 left-0 text-left"
            >
              <a
                href="#"
                class="block py-2 px-4 rounded text-gray-500 hover:bg-title hover:text-white transition-colors"
                >Rajeunissement facial</a
              >
              <a
                href="#"
                class="block py-2 px-4 rounded text-gray-500 hover:bg-title hover:text-white transition-colors"
                >Liposuccion / Liposculpture du corps</a
              >
              <a
                href="#"
                class="block py-2 px-4 rounded text-gray-500 hover:bg-title hover:text-white transition-colors"
                >Peeling</a
              >
            </nav>
          </Transition>
        </div>

        <router-link
          :to="{ name: 'bel-ann-cosmetic' }"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Bel ann cosmetic</router-link
        >
        <router-link
          :to="{ name: 'post' }"
          class="inline-block px-4 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Actualités</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          class="inline-block lg:px-4 px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >Contact</router-link
        >
        <div class="inline-block">
          <button
            type="button"
            class="lg:px-4 px-3 py-2 bg-title text-white rounded-lg mt-3 flex items-center space-x-2 justify-center text-lg hover:bg-white hover:text-title hover:border-title border-white border transition-all"
          >
            <CalendarIcon class="h-5 w-5" />
            <span>Rendez-vous</span>
          </button>
        </div>
      </div>
      <Transition
        enter-active-class="transition duration-500"
        enter-from-class="opacity-0 -translate-y-full absolute"
        enter-to-class="opacity-1 translate-y-0"
        leave-active-class="transition duration-500"
        leave-from-class="opacity-1/2 translate-y-0"
        leave-to-class="-translate-y-1/2 opacity-0 "
      >
        <div
          v-if="open.menu"
          class="mt-4 lg:hidden w-full text-gray-500 shadow rounded bg-white"
        >
          <button
            type="button"
            @click="goTo('esthetic')"
            class="flex w-full text-left px-3 py-2 justify-between items-center rounded border-b hover:bg-title hover:text-white transition-colors"
          >
            <span>Médécine Esthétique</span>
            <ChevronDownIcon class="w-5 h-5 text-title" />
          </button>

          <nav
            class="break-words text-sm block pl-10 bg-gray-50 border-b text-left"
          >
            <button
              type="button"
              class="block w-full text-left py-2 px-4 text-gray-500 hover:bg-title hover:text-white transition-colors"
            >
              Rajeunissement facial
            </button>
            <button
              type="button"
              class="block w-full text-left py-2 px-4 text-gray-500 hover:bg-title hover:text-white transition-colors"
            >
              Liposuccion / Liposculpture du corps
            </button>
            <button
              type="button"
              class="block w-full text-left py-2 px-4 text-gray-500 hover:bg-title hover:text-white transition-colors"
            >
              Peeling
            </button>
          </nav>
          <button
            type="button"
            @click="goTo('bel-ann-cosmetic')"
            class="block w-full text-left px-3 py-2 rounded hover:bg-title border-b hover:text-white transition-colors"
          >
            Bel ann cosmetic
          </button>
          <button
            type="button"
            @click="goTo('post')"
            class="block w-full text-left px-3 py-2 rounded hover:bg-title border-b hover:text-white transition-colors"
          >
            Actualités
          </button>
          <button
            type="button"
            @click="goTo('contact')"
            class="block w-full text-left px-3 py-2 rounded hover:bg-title hover:text-white transition-colors"
          >
            Contact
          </button>
          <a
            href="#"
            class="lg:px-4 px-3 py-2 bg-title text-white rounded-lg mt-3 flex items-center space-x-2 justify-center text-lg hover:bg-white hover:text-title hover:border-title border-white border transition-all"
          >
            <CalendarIcon class="h-5 w-5" />
            <span>Rendez-vous</span>
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>
