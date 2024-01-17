import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// createWebHashHistory  hash 路由   使用location.hash   通过hashchange事件监听url变化
// createWebHistory   普通路由    使用history   通过popstate事件监听url变化
// createMemoryHistory   服务端渲染使用

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
