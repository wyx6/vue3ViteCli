//src/store/index.ts
//导入counter.ts
import { useCounterStore } from "./counter";
import { initResetFun } from '@/utils/storeTools'

export interface IAppStore {
    useCounter: ReturnType<typeof useCounterStore>;
    // 其他store...
}

const appStore:IAppStore = {} as IAppStore;

/**
 * 注册app状态库
*/
export const registerStore = () => {
    appStore.useCounter = useCounterStore();
    // 其他store...

    //重写reset方法
    initResetFun(appStore);
}

export default appStore;