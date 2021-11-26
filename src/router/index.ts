import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../views/authentication/LoginPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/authentication/RegisterPage.vue')
  },
  {
    path: '/profile',
    name: 'Personal profile',
    component: () => import('../views/PersonalProfile.vue')
  },
  {
    path: '/profile/:name',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import ('../views/PostPage.vue')
  },
  {
    path: '/post/upload',
    name: 'Post upload',
    component: () => import ('../views/PostUploadPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
