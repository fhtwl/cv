import { createRouter, createWebHashHistory } from 'vue-router';

import common from './modules/common';
import cv from './modules/cv';

const routes = [...common, ...cv];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
