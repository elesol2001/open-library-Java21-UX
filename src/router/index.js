import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SearchIndex from "../components/SearchIndex.vue"
import MyLibrary from "../views/MyLibrary.vue"
import StartView from "../views/StartView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/book/:thing",
      name: "book",
      props: true,
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/start",
      name: "start",
      component: StartView,
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
