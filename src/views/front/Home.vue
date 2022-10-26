<script setup lang="ts">
import Hero from "@/components/home/Hero.vue";
import Service from "@/components/home/Service.vue";
import { ref, onMounted } from "vue";
import Description from "@/components/home/Description.vue";
import Esthetic from "@/components/home/Esthetic.vue";
import Contact from "@/components/home/Contact.vue";
import Testimonial from "@/components/home/Testimonial.vue";
import RecentPost from "@/components/home/RecentPost.vue";
import Location from "@/components/home/Location.vue";
import BelAnn from "@/components/home/BelAnn.vue";

onMounted(() => {});
</script>

<template>
  <div>
    <Hero />
    <Service />
    <Description />
    <Esthetic />
    <Contact />
    <BelAnn />
    <Testimonial />
    <RecentPost />
    <Location />
  </div>
</template>
