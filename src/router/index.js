import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const DEFAULT_TITLE = 'default page title';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
