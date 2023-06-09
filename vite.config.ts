import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import { version } from './package.json';
import config from './src/config';

function resolve(url: string): string {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 按需加载
    Components({
      include: [/\.vue$/, /\.tsx$/],
      resolvers: [
        AntDesignVueResolver({
          // 不加载css, 而是手动加载css. 通过手动加载less文件并将less变量绑定到css变量上, 即可实现动态主题色
          importStyle: false,
          // 加载所有icon
          resolveIcons: true,
        }),
      ],
    }),
    viteCompression(),
    createHtmlPlugin({
      inject: {
        data: {
          title: config.title,
          description: config.description,
          version,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '~@': resolve('./src'),
    },
    // 省略文件后缀
    extensions: ['.js', '.ts', '.json', '.jsx', '.tsx'],
  },
  // 声明node变量
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      less: {
        // 全局添加less
        additionalData: `@import '@/assets/styles/common/var.less';`,
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: './dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 块大小警告大小限制(kb)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 分解大块js,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    port: 8001,
    proxy: {
      '/knowledgegraph-service': {
        target: 'http://192.168.9.109:8075',
        ws: false,
        changeOrigin: true,
      },
      '/resource': {
        target: 'https://static.fhtwl.cc',
        ws: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/resource/, ''),
      },
    },
  },
});
