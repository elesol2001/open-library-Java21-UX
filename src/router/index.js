import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SearchIndex from "../components/SearchIndex.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: '/book/:thing',
            name: 'book',
            props: true,
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: "/title",
            name: "title",
            component: () =>
                import ("../views/TitleView.vue"),
        },
        {
            path: "/mylib",
            name: "mylib",
            component: () =>
                import ("../MyLibrary.vue"),
        },
        {
            path: '/searchIndex',
            name: 'SearchIndex',
            component: SearchIndex
        }
    ],
})

export default router
