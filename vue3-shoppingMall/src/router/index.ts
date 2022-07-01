/**
  ts版本的路由
 */
 
  import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
 
  // import login from '@/views/login/index.vue'    // 自定义的 登录页
  // import LoginOut from '@/views/login/loginOut.vue'  // 自定义的登出页
   
  /**
   * 定义路由模块
   */
  const routes: Array<RouteRecordRaw> = [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: login
    // },
    // {
    //   path: '/LoginOut',
    //   name: 'LoginOut',
    //   component: LoginOut
    // },
    {
      path: '/goods/list',
      name: 'GoodsList',
      component: () => import('../view/GoodsList.vue')
    },
    {
      path: '/face',
      name: 'Face',
      component: () => import('../view/FaceTracking.vue')
    }
  ]
   
  /**
   * 定义返回模块
   */
  const router = createRouter({
    history: createWebHistory('/'),  // ('/abc/') 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
    routes
  })
   
  export default router