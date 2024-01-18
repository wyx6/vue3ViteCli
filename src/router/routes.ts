//对外暴露配置路由
export const routes = [
  {
    path: '/',
    name: 'user',
    component: () => import('@/pages/user/index.vue'), // 注意这里要带上 文件后缀.vue
    meta: {}
  }
]
