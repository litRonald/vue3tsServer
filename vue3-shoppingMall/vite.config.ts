import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from 'path';

// function pathResolve(dir: string) {
//   return resolve(process.cwd(), '.', dir);
// }

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
    '@': join(__dirname, "src"),
  }
  // 1.
  // [
  //   {
  //     find: /\/@\//,
  //     replacement: pathResolve('src') + '/',
  //   },
  //   // /#/xxxx => types/xxxx
  //   {
  //     find: /\/#\//,
  //     replacement: pathResolve('types') + '/',
  //   },
  // ]
  // 2.
  // {
  //   // '/@/': path.resolve(__dirname, './src'),
  // }

})
