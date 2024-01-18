//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
//创建路由器
const router = createRouter({
  //路由模式根据需求选择
  history: createWebHashHistory(),
  routes: routes,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router
