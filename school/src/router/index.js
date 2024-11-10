import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index/Index.vue'
import NoPage from "@/Notfind.vue"
import Login_Admin from "@/views/Admin/Login.vue";
import Admin_dashboard from "@/views/Admin/src/tabs.vue"


import IndexIm from "@/views/Index/App/Index.vue"
import main from '@/views/Index/main/Index.vue';
import lyb from "@/views/Index/lyb/Index.vue"
import join from "@/views/Index/join/Index.vue"
import bbs from "@/views/Index/bbs/Index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      redirect: "/index",
      children: [
        {
          path: "/index",
          component: IndexIm
        },
        {
          path: "/im",
          component: main
        },
        {
          component: lyb,
        path: "/lyb"
        },
        {
          component: join,
          path: "/join"
        },
/**
 *         {
          component: bbs,
          path: "/bbs"
        }
 */
      ],
    },
     {
      path: "/admin/login",
      component: Login_Admin
    },
      {
          path: "/admin",
          component: Admin_dashboard
      },

    {
      path: '/404',
      component: NoPage,
      hidden: true
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
      hidden: true
    }
  ]

})

export default router
