import Vue from "vue";
import VueRouter from "vue-router";

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/pages/home/Home.vue")
  },
  {
    path: '/usermanage',
    name: 'UserManage',
    component: () => import("@/pages/usermanage/UserManage.vue"),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import("@/pages/detail/Detail.vue"),
  },
  {
    path: '/temp',
    name: 'Temp',
    component: () => import("@/pages/temp/Temp.vue"),
  }

  // children: [
  //   {
  //     path: '/home',
  //     name: 'Home',
  //     component: () => import("@/pages/home/Home.vue")
  //   },
  //   {
  //     path: '/detail',
  //     name: 'Detail',
  //     component: () => import("@/pages/detail/Detail.vue")
  //   },
  //   {
  //     path: '/temp',
  //     name: 'Temp',
  //     component: () => import("@/pages/temp/Temp.vue")
  //   },
  //   {
  //     path: '/usermanage',
  //     name: 'UserManage',
  //     component: () => import("@/pages/usermanage/UserManage.vue")
  //   }
  // ]



];

const router = new VueRouter({
  routes
});

export default router;
