import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    host: '127.0.0.1',
    https: false,
    open: true,
    port: 5173, // 端口号默认值5173
    // 代理，即'/api'会被转义成'http://localhost:8040',作用于接口前缀
    proxy: {
      "/api": { // 直接使用字符串作为代理路径
        target: `https://acserver.zhou.lk`, // 后台接口前缀
        changeOrigin: true, // 是否允许跨域
        secure: false, // 如果是https接口，需要配置这个参数
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径，移除/api前缀
      }
    }
  },
});
