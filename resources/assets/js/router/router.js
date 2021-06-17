import { createRouter, createWebHistory } from "vue-router";
import routes from './routeAddreses'

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: routes,
})



export default router;