import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/items',
      name: 'items',
      component: () => import('../views/ItemsListView.vue')
    }
  ]
});

export default router
