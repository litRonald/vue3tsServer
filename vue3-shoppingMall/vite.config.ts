import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import env from import.meta.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5000, // 设置端口 防止冲突
    // proxy: [
    //   [import.meta.env.VITE_APP_BASE_API]: {
    //     target: '',
    //     changeOrigin: true,
    //     rewrite: path => {
    //       return path.replace(new RegExp('^' + import.meta.env.VITE_APP_BASE_API), '')
    //     }
    //   }
    // ]
  },
  alias: {
  },

})
