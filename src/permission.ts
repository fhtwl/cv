// import NProgress from 'nprogress';
// import router from './router';
// import { useStore } from './store/system/user';
// import '@/components/NProgress/nprogress.less';
// import { notification } from 'ant-design-vue';
// import { resetMenuRouter, updateMenuRouter } from './utils/router';

// NProgress.configure({ showSpinner: false });

// const allowList = ['login', 'register', 'registerResult'];
export const loginRoutePath = '/auth/login';
// const defaultRoutePath = '/portrait/peopleSearch';

// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   console.log(to, from, next);
//   // // 请求带有 redirect 重定向时，登录自动重定向到该地址
//   // const redirect = decodeURIComponent(
//   //   (from.query?.redirect as string | undefined) || to.path
//   // );
//   // if (to.path === redirect) {
//   //   next({ ...to, replace: true });
//   // } else {
//   //   // 跳转到目的路由
//   //   next({ path: redirect });
//   // }
// });

// router.afterEach(() => {
//   NProgress.done();
// });
