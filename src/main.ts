import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import setupAtnd from '@/lib/ant-design-vue';
import echarts from '@/lib/echarts';
import router from '@/router';
import axios from '@/utils/http';
import CIcon from '@/components/CIcon/index.vue';

import './permission';

const app = createApp(App);
app.use(router);
app.component('CIcon', CIcon);
app.use(createPinia());

setupAtnd(app);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$echarts = echarts;
app.mount('#app');
