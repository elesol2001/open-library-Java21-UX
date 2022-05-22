import { createRouter, createWebHistory } from "vue-router"
import SearchIndex from "../components/SearchIndex.vue"
import MyLibrary from "../views/MyLibrary.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("../views/StartView.vue"),
    },
    {
      path: "/book/:thing",
      name: "book",
      props: true,
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/",
      name: "start",
      component: () => import("../views/StartView.vue"),
    },
    {
      path: "/mylib",
      name: "mylib",
      component: MyLibrary,
    },
    {
      path: "/searchIndex",
      name: "SearchIndex",
      component: SearchIndex,
    },
  ],
})

export default router
