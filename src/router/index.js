import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Compare from '../views/Compare.vue'
import Aml from '../views/Aml.vue'
import Support from '../views/Support.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare
  },
  {
    path: '/aml',
    name: 'aml',
    component: Aml
  },
  {
    path: '/support',
    name: 'support',
    component: Support
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
