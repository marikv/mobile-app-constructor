
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/shop.vue') },
    ],
  },
  {
    path: '/shop',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/shop.vue') },
    ],
  },
  {
    path: '/auth/login',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/login.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
