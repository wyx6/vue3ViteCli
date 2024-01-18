// src/utils/storeTools
// Pinia store基础集成方法
import type { IAppStore } from '@/store'

/**
 * 重构$reset()
 * @desc 因为setup模式编程不支持reset方法，这里要手动重构
 * @param appStore
 */
export const initResetFun = (appStore: IAppStore) => {
  // 遍历 appStore 中的所有项。
  Object.values(appStore).forEach((item) => {
    // 创建一个空对象 initState 用于存储初始状态。
    const initState = {} as Record<string, any>

    // 遍历 item 的 $state 对象的所有条目。
    Object.entries(item.$state).forEach((item) => {
      // 将每个状态的初始值存储到 initState 对象中。
      initState[item[0]] = item[1]
    })

    // 为每个 store 项定义一个 reset 方法。
    item.reset = () => {
      // 遍历 $state 对象的所有状态。
      Object.keys(item.$state).forEach((state) => {
        // 将每个状态重置为其初始值。
        item.$state[state] = initState[state]
      })
    }
  })
}
