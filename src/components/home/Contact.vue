<script setup lang="ts">
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BookmarkIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full lg:px-32 px-4 py-16 bg-title lg:flex items-center">
    <div class="lg:w-1/2 flex flex-col items-center lg:items-start">
      <h3
        class="lg:text-lg font-semibold uppercase text-custom-yellow px-4 flex items-center space-x-4"
      >
        <span>
          <svg
            class="w-6 h-6"
            width="32"
            height="17"
            viewBox="0 0 32 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.28757H8.87673L12.8884 1L19.6818 16L23.5387 9.28757H31"
              stroke="#FCF894"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span>Obtenir un rendez-vous</span>
      </h3>
      <h1 class="text-2xl lg:text-4xl mt-2 font-bold text-white">
        Besoins de conseils ?
      </h1>
      <p class="text-white mt-4 text-lg lg:text-left text-center">
        Le Docteur Sigha Odette utilise les dernières technologies de guérison
        pour vous redonner une santé sans douleur rapidement et facilement.
      </p>
    </div>
    <div class="lg:w-1/2 px-3 lg:mt-0 mt-6">
      <form>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="relative">
            <UserIcon class="h-7 w-7 text-title absolute top-3.5 left-3" />
            <input
              type="text"
              placeholder="Nom"
              class="py-4 text-xl px-2 rounded-xl bg-white w-full pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
            />
          </div>
          <div class="relative">
            <EnvelopeIcon class="h-7 w-7 text-title absolute top-3.5 left-3" />
            <input
              type="email"
              placeholder="E-mail"
              class="py-4 text-xl px-2 rounded-xl bg-white w-full pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
            />
          </div>
          <div class="relative">
            <PhoneIcon class="h-7 w-7 text-title absolute top-3.5 left-3" />
            <input
              type="text"
              placeholder="Téléphone"
              class="py-4 text-xl pr-2 rounded-xl bg-white w-full pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
            />
          </div>
          <div class="relative">
            <BookmarkIcon class="h-7 w-7 text-title absolute top-3.5 left-3" />
            <select
              name=""
              id=""
              class="py-4 text-xl rounded-xl pr-2 w-full pl-12 focus:outline-none focus:border focus:border-white focus:ring focus:ring-custom-yellow/80"
            >
              <option value="">Dermatologie</option>
            </select>
          </div>
        </div>
        <div class="flex items-center md:flex-row flex-col md:space-x-4 mt-6">
          <button
            type="button"
            class="bg-custom-yellow py-4 px-6 lg:w-2/4 w-full border border-custom-yellow hover:bg-transparent transition-colors hover:text-white rounded-xl"
          >
            Prenez rendez-vous
          </button>
          <div class="text-xl text-white py-4">
            <span>(ou)</span>
          </div>
          <a
            href="#"
            class="p-2 rounded-lg border-2 border-custom-yellow flex w-16 justify-center items-center"
            ><svg
              class="h-9 w-9 text-white hover:text-gray-50"
              viewBox="0 0 36 36"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.4008 5.58602C28.7829 3.96732 26.8608 2.68462 24.7451 1.81176C22.6295 0.938901 20.3621 0.49312 18.0734 0.50008C8.46875 0.50008 0.65 8.27977 0.646094 17.8438C0.641845 20.8892 1.44461 23.8814 2.97266 26.5157L0.5 35.5001L9.73828 33.0884C12.2955 34.4737 15.1581 35.1987 18.0664 35.1977H18.0734C27.6773 35.1977 35.4953 27.4173 35.5 17.854C35.5058 15.5732 35.058 13.314 34.1826 11.2078C33.3071 9.10171 32.0216 7.19071 30.4008 5.58602ZM18.0734 32.2704H18.0672C15.4745 32.2712 12.929 31.5773 10.6953 30.261L10.1664 29.9485L4.68437 31.3798L6.14766 26.0602L5.80312 25.5134C4.35343 23.2182 3.58535 20.5585 3.58828 17.8438C3.58828 9.89617 10.0891 3.42977 18.0789 3.42977C21.9117 3.42292 25.5903 4.93878 28.3055 7.64392C31.0208 10.3491 32.5504 14.022 32.5578 17.8548C32.5547 25.8032 26.057 32.2704 18.0734 32.2704ZM26.018 21.4743C25.5828 21.2571 23.4398 20.2087 23.043 20.0641C22.6461 19.9196 22.3531 19.847 22.0633 20.2813C21.7734 20.7157 20.9383 21.6876 20.6844 21.9806C20.4305 22.2735 20.1766 22.3055 19.7414 22.0884C19.3063 21.8712 17.9023 21.4141 16.2391 19.9376C14.9445 18.7884 14.0711 17.3696 13.8172 16.936C13.5633 16.5024 13.7898 16.2673 14.0078 16.0516C14.2039 15.8571 14.443 15.5454 14.6609 15.2923C14.8789 15.0391 14.9516 14.8579 15.0961 14.5688C15.2406 14.2798 15.1687 14.0266 15.0602 13.8102C14.9516 13.5938 14.0805 11.4602 13.718 10.5923C13.3641 9.74695 13.0055 9.8618 12.7383 9.84852C12.4844 9.83602 12.1914 9.83289 11.9031 9.83289C11.6827 9.83863 11.4659 9.88974 11.2662 9.98302C11.0664 10.0763 10.888 10.2098 10.7422 10.3751C10.343 10.8095 9.21797 11.8595 9.21797 13.9907C9.21797 16.122 10.7805 18.1845 10.9961 18.4735C11.2117 18.7626 14.0664 23.1399 18.4344 25.0173C19.2455 25.3646 20.0742 25.6692 20.9172 25.9298C21.9602 26.2595 22.9094 26.2134 23.6594 26.1016C24.4961 25.9774 26.2375 25.0532 26.5992 24.0407C26.9609 23.0282 26.9617 22.161 26.8531 21.9806C26.7445 21.8001 26.4539 21.6907 26.018 21.4743Z"
                fill="currentColor"
              /></svg
          ></a>
          <a
            href="#"
            class="font-semibold text-white hover:underline md:mt-0 mt-2"
            >237 6 58 40 11 81</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
