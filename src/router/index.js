import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from "../views/Activity";
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name : 'home',
      component:Activity
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
