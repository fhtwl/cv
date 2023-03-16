export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/views/home/index'),
    redirect: '/home',
    children: [
      {
        // name: 'home',
        path: '/home',
        component: () => import('@/views/home/home'),
      },
    ],
  },
  {
    path: '/editor',
    component: () => import('@/views/editor'),
  },
];
