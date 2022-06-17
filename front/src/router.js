import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./layouts/Default.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import("./views/Home.vue"),
            },
            {
                path: "/apoie",
                name: "Apoie",
                component: () => import("./views/Apoie.vue"),
            },
            {
                path: "/adote",
                name: "Adote",
                component: () => import("./views/Adote.vue"),
            },
            {
                path: "/login",
                name: "Login",
                component: () => import("./views/Login.vue"),
            },
            {
                path: "/logout",
                name: "Logout",
                component: () => import("./views/Logout.vue"),
            },
            {
                path: "/admin",
                name: "Admin",
                component: () => import("./views/Admin.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;