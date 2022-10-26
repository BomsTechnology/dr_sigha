<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import Banner from "@/components/Banner.vue";
import type { Link } from "@/components/Banner.vue";
import Contact from "@/components/home/Contact.vue";
import { CalendarIcon } from "@heroicons/vue/24/solid";

const links: Array<Link> = [
  {
    label: "Médécine Esthétique",
    route: "esthetic",
  },
  {
    label: "Mon Traitement",
    route: "",
  },
];

const props = defineProps<{
  slug: {
    required: true;
    type: string;
  };
}>();
</script>

<template>
  <Banner :links="links" :title="'Mon Traitement'" />
  <div class="bg-gray-50 w-full py-8 lg:px-32 px-4">
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <div class="w-full h-full md:px-4">
        <img
          :src="img1"
          alt=""
          class="lg:min-h-[500px] lg:h-full h-80 rounded-xl shadow w-full object-cover"
        />
      </div>
      <div class="w-full md:px-6 lg:mt-0 mt-8">
        <h1
          class="md:text-5xl text-3xl font-bold"
          style="
            text-shadow: 1px 1px 2px #4b9a77, 0 0 1em #fcf894, 0 0 0.2em #fcf894;
          "
        >
          Mon Super Titre Trop genial
        </h1>
        <p class="py-4 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          laborum quisquam. Neque sequi et sunt aspernatur nemo aut, iste
          doloremque itaque commodi ea accusamus quo perferendis qui! Molestias
          necessitatibus deserunt nihil odit iste fuga, vitae nemo enim aliquid
          praesentium corporis aperiam nostrum quia quos cupiditate delectus id
          nulla doloribus, fugiat temporibus. Amet voluptatum facilis aspernatur
          dolores voluptatibus labore, ipsa velit voluptatem dolore magni
          voluptas tenetur mollitia molestiae. Aut, unde! Assumenda
          exercitationem quibusdam cum minus, perferendis sunt at molestiae
          explicabo, sed architecto nam dolores itaque fugiat eaque laborum?
          Tempore voluptatem consequuntur quae illo? Ducimus officiis asperiores
          cum totam ullam. Maxime molestias accusantium quas reprehenderit
          rerum, ea eveniet qui sunt, veniam aliquid autem voluptatem illum.
          Repellendus expedita perferendis sint nobis exercitationem dicta sed
        </p>
        <a
          href="#"
          class="lg:px-4 px-3 py-2 bg-title text-white rounded-lg mt-3 flex items-center space-x-2 justify-center text-lg hover:bg-white hover:text-title hover:border-title border-white border transition-all"
        >
          <CalendarIcon class="h-5 w-5" />
          <span>Prenez Rendez-vous</span>
        </a>
      </div>
    </div>

    <div class="py-12 lg:py-20">
      <div class="w-full flex justify-center">
        <h1
          class="lg:text-5xl text-3xl font-semibold flex items-center space-x-2"
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
          <span>Galerie d'images</span>
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
        </h1>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-8">
        <div
          class="w-full lg:h-96 h-60 overflow-hidden rounded-xl shadow"
          v-for="i in 8"
        >
          <img :src="img1" alt="" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
  <Contact />
</template>
