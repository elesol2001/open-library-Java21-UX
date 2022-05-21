import { createRouter, createWebHistory } from "vue-router"
<<<<<<< HEAD
=======
import HomeView from "../views/HomeView.vue"
import SearchIndex from "../components/SearchIndex.vue"
>>>>>>> main

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
<<<<<<< HEAD
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/SearchView.vue"),
=======
      component: HomeView,
    },
    {
      path: "/about/:thing",
      name: "about",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/title",
      name: "title",
      component: () => import("../views/TitleView.vue"),
>>>>>>> main
    },
    {
      path: "/mylib",
      name: "mylib",
<<<<<<< HEAD
      component: () => import("@/views/MyLibrary.vue"),
=======
      component: () => import("../MyLibrary.vue"),
    },
    {
      path: "/searchIndex",
      name: "SearchIndex",
      component: SearchIndex,
>>>>>>> main
    },
  ],
})

export default router
