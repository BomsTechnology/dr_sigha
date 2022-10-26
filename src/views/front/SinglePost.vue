<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import Banner from "@/components/Banner.vue";
import type { Link } from "@/components/Banner.vue";
import {
  UserCircleIcon,
  CalendarIcon,
  ClockIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PencilIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
const links: Array<Link> = [
  {
    label: "Actualités",
    route: "post",
  },
  {
    label: "Mon Article",
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
  <Banner :links="links" :title="'Mon Article'" />
  <div class="bg-gray-50 w-full py-8 lg:px-32 px-4">
    <div
      class="flex justify-center md:flex-nowrap flex-wrap text-sm md:text-lg font-semibold items-center space-x-4"
    >
      <div class="flex space-x-1">
        <UserCircleIcon class="md:h-6 md:w-6 h-4 w-4 text-title" />
        <span>Dr. Sigha Odette</span>
      </div>
      <div class="flex space-x-1">
        <CalendarIcon class="md:h-6 md:w-6 h-4 w-4 text-title" />
        <span>21 Janvier 2021</span>
      </div>
      <div class="flex space-x-1">
        <ClockIcon class="md:h-6 md:w-6 h-4 w-4 text-title" />
        <span>18h30</span>
      </div>
      <div class="flex space-x-1">
        <ChatBubbleOvalLeftEllipsisIcon
          class="md:h-6 md:w-6 h-4 w-4 text-title"
        />
        <span>Pas de commentaire</span>
      </div>
    </div>
    <img
      :src="img1"
      class="w-full rounded-xl h-[400px] md:h-[600px] object-cover mt-4"
    />
    <div class="lg:flex items-start w-full py-8">
      <div class="lg:w-3/4 lg:pr-10">
        <h1
          class="md:text-5xl text-xl font-bold"
          style="
            text-shadow: 1px 1px 2px #4b9a77, 0 0 1em #fcf894, 0 0 0.2em #fcf894;
          "
        >
          Mon Super Titre Trop genial
        </h1>
        <p class="py-4">
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
          architecto magni autem deleniti tempora, vitae nostrum fugit ad ut
          neque ex quasi aut hic magnam eligendi odio voluptas mollitia? Harum
          atque nihil veniam minima consectetur alias, nisi, officia ullam
          cupiditate voluptatem fugit tempora rem facilis eos? Libero sequi sit
          incidunt ipsa, dolore sapiente quod, temporibus nobis vero amet
          exercitationem itaque consequatur expedita optio reprehenderit
          molestiae quaerat obcaecati repellat! Pariatur mollitia minus
          exercitationem laboriosam deserunt sunt repellat autem rerum quod?
          Voluptatibus odit ad officia dolorem cum, aliquam quas voluptate.
        </p>
        <div class="lg:hidden block">
          <div class="flex items-center space-x-4">
            <img
              :src="img1"
              alt=""
              class="h-20 w-20 object-cover rounded-xl shadow-xl shadow-custom-yellow"
            />
            <div>
              <h3 class="text-xl font-bold">Dr. Sigha Odette</h3>
              <h4 class="text-sm">Dermatologie / Vénérologie</h4>
              <h4 class="text-xs">Médécine Esthétique</h4>
              <h4 class="text-xs">Cosmétique</h4>
            </div>
          </div>
          <div class="mt-8">
            <h1 class="text-lg font-bold">Suivez - Moi :</h1>
            <div class="flex mt-2 items-center">
              <div
                class="p-2 rounded-lg border-2 border-title text-title flex justify-center items-center"
              >
                <svg
                  class="h-8 w-8"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 py-4 border-t">
          <div class="border-b border-gray-300 py-3">
            <div
              class="float-left mr-3 flex flex-col justify-center items-center"
            >
              <UserCircleIcon class="h-16 w-16 text-gray-700" />
              <div class="text-center mt-1">
                <h2 class="text-sm text-gray-800 font-bold">Marcelin Sigha</h2>
                <h2 class="text-xs text-gray-500">23 Juin 2020</h2>
              </div>
            </div>
            <p class="text-justify text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
              animi natus assumenda consequuntur laboriosam sapiente? Eligendi,
              fugiat quod debitis, voluptatem esse velit necessitatibus voluptas
              rem magni incidunt soluta nulla.fugiat quod debitis, voluptatem
              esse velit necessitatibus voluptas rem magni incidunt soluta
              nulla.
            </p>
          </div>
        </div>

        <div class="mt-8">
          <h1 class="text-title lg:text-2xl font-bold text-xl">
            Laissez un commentaire
          </h1>
          <form class="w-full mt-2">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="lg:text-xl font-semibold">Nom</label>
                <div class="relative mt-2">
                  <UserIcon
                    class="h-7 w-7 text-title absolute top-3.5 left-3"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    id="name"
                    class="py-4 text-xl px-2 rounded-xl bg-white w-full pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
                  />
                </div>
              </div>
              <div>
                <label for="email" class="lg:text-xl font-semibold"
                  >E-mail</label
                >
                <div class="relative mt-2">
                  <EnvelopeIcon
                    class="h-7 w-7 text-title absolute top-3.5 left-3"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    class="py-4 text-xl px-2 rounded-xl bg-white w-full pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
                  />
                </div>
              </div>
            </div>
            <div class="mt-6">
              <label for="message" class="lg:text-xl font-semibold"
                >Commentaire</label
              >
              <div class="relative mt-2">
                <PencilIcon
                  class="h-7 w-7 text-title absolute top-3.5 left-3"
                />
                <textarea
                  name="message"
                  id="message"
                  class="py-4 text-xl rounded-xl pr-2 w-full h-52 pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
                ></textarea>
              </div>
            </div>
            <div class="mt-8">
              <button
                type="button"
                class="bg-custom-yellow py-4 px-6 w-full border border-title hover:bg-transparent transition-colors hover:text-title rounded-xl"
              >
                Commenter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="lg:w-1/4 lg:block hidden">
        <div class="flex items-center space-x-4">
          <img
            :src="img1"
            alt=""
            class="h-20 w-20 object-cover rounded-xl shadow-xl shadow-custom-yellow"
          />
          <div>
            <h3 class="text-xl font-bold">Dr. Sigha Odette</h3>
            <h4 class="text-sm">Dermatologie / Vénérologie</h4>
            <h4 class="text-xs">Médécine Esthétique</h4>
            <h4 class="text-xs">Cosmétique</h4>
          </div>
        </div>
        <div class="mt-8">
          <h1 class="text-lg font-bold">Suivez - Moi :</h1>
          <div class="flex mt-2 items-center">
            <div
              class="p-2 rounded-lg border-2 border-title text-title flex justify-center items-center"
            >
              <svg
                class="h-8 w-8"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
