import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Granulation from "@/views/Granulation";
import GranulationList from "@/views/GranulationList";
import Preparation from "@/views/Preparation";
import Homogenization from "@/views/Homogenization";
import Tableting from "@/views/Tableting";

Vue.use(VueRouter)

// {
//   name: 'Priprava granularne raztopine',
//       route: 'priprava'
// },
// {
//   image: 'slojna_granulacija.jpg',
//       name: 'Vrtično slojno granuliranje',
//     route: 'slojna_granulacija'
// },
// {
//   image: 'homogenizacija.png',
//       name: 'Homegenizacija',
//     route: 'homogenizacija'
// },
// {
//   image: 'tabletiranje.jpg',
//       name: 'Tabletiranje',
//     route: 'tabletiranje'
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/preparation',
    name: 'Preparation',
    component: Preparation
  },
  {
    path: '/granulation',
    name: 'Granulation',
    component: Granulation
  },
  {
    path: '/homogenization',
    name: 'Homogenization',
    component: Homogenization
  },
  {
    path: '/tableting',
    name: 'Tableting',
    component: Tableting
  },
  {
    path: '/granulationList',
    name: 'GranulationList',
    component: GranulationList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
