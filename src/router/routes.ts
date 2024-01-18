//对外暴露配置路由
export const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/main.vue'), // 注意这里要带上 文件后缀.vue
    meta: {}
  }
]
