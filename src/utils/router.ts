import router from '@/router';
import { ROOT_NAME } from '@/router/modules/generatorRouters';

export function resetMenuRouter() {
  // 动态路由都挂在name为ROOT_NAME的路由下
  if (router.hasRoute(ROOT_NAME.toString())) {
    // 更新前先清空动态路由
    router.removeRoute(ROOT_NAME.toString());
  }
}
