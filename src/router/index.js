import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: '/about/:thing',
            name: 'about',
            props: true,
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: "/title",
            name: "title",
            component: () => import("../views/TitleView.vue"),
        },
        {
            path: "/mylib",
            name: "mylib",
            component: () => import("../MyLibrary.vue"),
        },
    ],
})

export default router
