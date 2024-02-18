import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home", name:'home', component: () => import("../views/Home.vue") },
        { path: "/about", name:'about', component: () => import("../views/About.vue") },
        { path: "/contact", name:'contact', component: () => import("../views/Contact.vue") },
        { path: "/sign-up", name:'sign-up', component: () => import("../views/Signup.vue") },
        { path: "/sign-in", name:'sign-in',component: () => import("../views/Signin.vue") },
        { path: "/carsearch",name:'carsearch',component: () => import("../views/carsearch.vue")}
    ],
});

export default router;