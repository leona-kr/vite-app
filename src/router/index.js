import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("../views/About.vue")
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import("../views/Portfolio.vue")
    },
    {
        path: '/help',
        name: 'help',
        component: () => import("../views/Help.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };