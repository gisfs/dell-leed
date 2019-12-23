import Vue from "vue";

import VueRouter from "vue-router";
import Home from "@/pages/home/Home";
import Detail from "@/pages/detail/Detail";

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "/testvue",
    name: "TestVue",
    component: () => import("@/pages/testVue/TestVue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
