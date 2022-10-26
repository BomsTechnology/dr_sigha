import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const NavBar = () => import("@/components/NavBar.vue");
const Footer = () => import("@/components/Footer.vue");

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    isAdmin?: boolean;
    requiresAuth?: boolean;
  }
}
const websiteName: String = "Dr. SIGHA Odette";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("@/views/front/Home.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Médécine Esthétique au Cameroun | " + websiteName,
    },
  },
  {
    path: "/medecine-esthetique",
    name: "esthetic",
    components: {
      default: () => import("@/views/front/Esthetic.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Traitements Médécine Esthétique au Cameroun | " + websiteName,
    },
  },
  {
    path: "/bel-ann-cosmetic",
    name: "bel-ann-cosmetic",
    components: {
      default: () => import("@/views/front/BelAnn.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Bel Ann Cosmetic | " + websiteName,
    },
  },
  {
    path: "/actualites",
    name: "post",
    components: {
      default: () => import("@/views/front/Post.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Actualités | " + websiteName,
    },
  },
  {
    path: "/medecine-esthetique/:slug",
    name: "single-esthetic",
    components: {
      default: () => import("@/views/front/SingleEsthetic.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Médécine Esthétique au Cameroun | " + websiteName,
    },
  },
  {
    path: "/actualites/:slug",
    name: "single-post",
    components: {
      default: () => import("@/views/front/SinglePost.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Actualités | " + websiteName,
    },
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      default: () => import("@/views/front/Contact.vue"),
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Contactez - nous | " + websiteName,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();
//   if (to.meta.requiresAuth) {
//     if (await userStore.getCurrentUser()) {
//       if (to.meta.isAdmin) {
//         if (userStore.currentUser.type == "admin") {
//           next();
//         } else {
//           next({ name: "home" });
//         }
//       } else {
//         next();
//       }
//     } else {
//       next({ name: "login" });
//     }
//   } else {
//     next();
//   }
// });

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
