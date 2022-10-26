<script setup lang="ts">
import img1 from "@/assets/images/bg1.webp";
import img2 from "@/assets/images/bg2.jpg";
import img3 from "@/assets/images/bg3.jpg";
import Banner from "@/components/Banner.vue";
import type { Link } from "@/components/Banner.vue";
import Contact from "@/components/home/Contact.vue";
import type { CardEsthetic } from "@/components/EstheticCard.vue";
import EstheticCard from "@/components/EstheticCard.vue";
const links: Array<Link> = [
  {
    label: "Médécine Esthétique",
    route: "esthetic",
  },
];

const items: Array<CardEsthetic> = [
  {
    image: img1,
    title: "Rajeunissement Facial",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img2,
    title: "Liposuccion / Liposculpture du corps",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img3,
    title: "Peeling",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img1,
    title: "Rajeunissement Facial",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img2,
    title: "Peeling",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
  {
    image: img3,
    title: "Peeling",
    description:
      "Intégrez objectivement des domaines thématiques stratégiques à l'échelle de l'entreprise avec des infrastructures fonctionnalisées.",
  },
];
</script>
<template>
  <Banner :links="links" :title="'Médécine Esthétique au Cameroun'" />
  <div class="bg-gray-50 w-full py-12 lg:px-32 px-4">
    <p class="text-center py-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fugiat
      doloribus quae quasi praesentium velit, sit magnam, mollitia natus
      voluptates sint quod, officia nesciunt. Nobis facere quia dignissimos
      placeat optio perspiciatis architecto saepe repellat quaerat, natus,
      voluptas laborum inventore, ad ducimus ipsum. Sunt tenetur minima
      laudantium quia corporis beatae, itaque quis esse provident molestiae!
      Dolores architecto dolorum ad sed illum eveniet quisquam tempore modi
      aperiam nihil in perspiciatis quo, consectetur incidunt impedit nostrum
      vel assumenda voluptas fugiat aut, ullam ea. Culpa odio iste, aspernatur
      dignissimos incidunt ut autem earum molestiae optio error corporis ad illo
      enim veritatis cum itaque aliquid?
    </p>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-24">
      <EstheticCard v-for="(item, index) in items" :key="index" :data="item" />
    </div>
  </div>
  <Contact />
</template>
