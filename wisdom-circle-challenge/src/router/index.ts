import ForgotPasswordVue from '@/views/ForgotPassword.vue'
import LoginVueVue from '@/views/LoginVue.vue'
import ResetPasswordVue from '@/views/ResetPassword.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginVue',
      component: LoginVueVue
    },
    {
      path: '/welcome',
      name: 'welcome' ,
      component: () => import("../views/WelcomePage.vue")
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPasswordVue
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPasswordVue
    }
  ]
})

export default router
