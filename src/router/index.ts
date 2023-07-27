import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/:catchAll',
    name: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/console/index',
    name: 'consoleIndex',
    component: () => import('../views/Console.vue'),
    children: [
      {
        path: '/console/index',
        name: 'consoleIndex',
        component: () => import('../views/ConsoleIndex.vue')
      },
      {
        path: '/console/management',
        name: 'consoleManagement',
        component: () => import('../views/ConsoleManagement.vue')
      },
      {
        path: '/console/setup',
        name: 'consoleSetup',
        component: () => import('../views/ConsoleSetup.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
