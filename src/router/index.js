import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from "../views/Activity";
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name : 'home',
      component:Activity
    },
    {
      path:'/liked',
      name:'liked',
      component: ()=>import(/* webpackChunkName: "liked-activities" */ '../views/LikedActivityView')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
