import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Hello from "../pages/Hello";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/hello",
    name: "Btn",
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;