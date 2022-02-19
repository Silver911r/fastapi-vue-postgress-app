import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Note from "@/views/Note.vue";
import Profile from "@/views/Profile";
import Register from "@/views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/note/:id",
    name: "Note",
    component: Note,
    meta: { requiresAuth: true },
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
