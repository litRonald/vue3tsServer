import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from 'path';

// import env from import.meta.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
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
  // preprocessorOptions: {
  //   scss: {
  //     // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
  //     additionalData: '@import "./src/styles/variables.scss";'
  //   }
  // }
  alias: {
    '@': join(__dirname, "src"),
  },
  
  css:{
    //css预处理
    preprocessorOptions:{
      scss:{
        //引入var.scss全局预定义变量
        additionalData:'@import "./src/assets/scss/var.scss";@import "./src/assets/scss/common.scss";'
      }
    }
  },

})
