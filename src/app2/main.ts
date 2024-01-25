import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { registerStore } from './store'
const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)
// 注册pinia状态管理库
registerStore()
app.mount('#app')
