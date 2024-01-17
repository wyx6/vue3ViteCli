// http/index.js
import axios, { AxiosRequestConfig } from 'axios'

// 创建axios的一个实例
const instance = axios.create({
  baseURL: String(import.meta.env.VITE_APP_BASE_API || window.location.origin),
  timeout: 6000, // 设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
})

let loading: any
//显示loading
export const showLoading = () => {}

//隐藏loading
export const hideLoading = () => {
  //啥也不用干
}

// 请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    showLoading()
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }

    // 若请求方式为post，则将data参数转为JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  (error: any) =>
    // 对请求错误做些什么
    Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  (response: any) => {
    hideLoading()
    return response
  },
  (error: { response: { status: any } }) => {
    // 响应错误
    if (error.response && error.response.status) {
      const status = error.response.status
      //对status进行判断
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await instance(config)
  return res.data as T
}
