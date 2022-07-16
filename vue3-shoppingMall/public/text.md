
## 推荐文件目录结构
vue3-src
├─api 接口模块
│
├─assets 静态资源模块
│  ├─icon svg图标
│  ├─images 图片
│  └─sass 样式
│
├─components 全局组件模块
│  └─svg-icon svg图标组件
│
├─directive 全局自定义指令
│
├─element element-plus按需加载
│
├─mixins 代码复用 （vue2混入）
│  ├─instance element的$message、$confirm、$loading可进行补充
│  └─page 分页
│
├─router 动态路由
│
├─store vuex
│  ├─modules
│  │  ├─menu 菜单模块
│  │  ├─setting 设置模块
│  │  ├─tab 标签页模块
│  │  └─user 用户登录信息模块
│  └─index 动态加载模块
│
├─types typescript接口
│
├─utils 工具模块
│  ├─constants 常量
│  ├─index 工具
│  ├─regular 正则
│  ├─request axios二次封装
│  └─storage 本地缓存工具
│
├─views 视图模块
│  ├─components
│  │  ├─iframe iframe组件用于加载其他页面
│  │  ├─language 国际化设置组件
│  │  └─page 分页组件
│  ├─global
│  │  ├─401 401页面
│  │  ├─404 404页面
│  │  └─login 登录页面
│  ├─layout
│  │  ├─components
│  │  │  ├─edit-info 修改信息
│  │  │  ├─headbar 顶部导航
│  │  │  ├─sidebar 侧边栏
│  │  │  └─tabsbar 标签页
│  │  └─index 布局入口页面
│  └─modules 页面模块
