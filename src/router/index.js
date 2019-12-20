import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/home/Home";
import Detail from "@/pages/detail/Detail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    // redirect: "/"
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "/hometest",
    name: "HomeTest",
    component: () => import("@/pages/home/HomeTest")
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
