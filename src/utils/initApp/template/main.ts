import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { registerStore } from './store'
import piniaPlugin from '@/utils/persistentStorage.ts'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
app.use(router)
const pinia = createPinia()
console.log('你进来了')
pinia.use(
  piniaPlugin({
    key: 'zt', // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
    storeList: [
      {
        storeName: ['counter'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'localStorage'
      },
      {
        storeName: ['user'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
        storageType: 'sessionStorage'
      }
    ]
  })
)
// pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 注册pinia状态管理库
registerStore()
app.mount('#app')
