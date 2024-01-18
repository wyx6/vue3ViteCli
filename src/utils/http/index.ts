import axios, { AxiosRequestConfig } from 'axios'

// 创建axios的一个实例
const instance = axios.create({
  baseURL: String(import.meta.env.VITE_APP_BASE_API || window.location.origin),
  timeout: 6000, // 设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
})

//显示loading,显示加载动画
export const showLoading = () => {}

//隐藏loading，关闭动画
export const hideLoading = () => {
  //啥也不用干
}

// 请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    showLoading()
    const token = window.localStorage.getItem('token')
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
      switch (status) {
        case 401:
          message = 'TOKEN过期'
          break
        case 403:
          message = '无权访问'
          break
        case 404:
          message = '请求地址错误'
          break
        case 500:
          message = '服务器出现问题'
          break
        default:
          message = '网络出现问题'
          break
      }
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default async <T>(config: AxiosRequestConfig) => {
  const res = await instance(config)
  return res.data as T
}
