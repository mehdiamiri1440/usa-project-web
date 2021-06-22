import { createRouter, createWebHistory } from "vue-router";
import routes from './routeAddreses'

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})



export default router;