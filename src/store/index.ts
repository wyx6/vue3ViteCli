// src/store/index.ts
import { useCounterStore } from './counter'
//还可以引入其它仓库模块

export interface IAppStore {
  useCounter: ReturnType<typeof useCounterStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useCounter = useCounterStore()
}

export default appStore
