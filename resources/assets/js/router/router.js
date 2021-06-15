import { createRouter, createWebHistory } from "vue-router";
import routes from './routeAddreses'

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //     JSON.stringify(localStorage.setItem('scroll', savedPosition.y));
    //     return savedPosition
    // }
    return { x: 0, y: 0 };
  },
})

export default router;