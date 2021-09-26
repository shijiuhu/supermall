import axios from 'axios'

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  }, err => {
    console.log(err);
    return err
  })

  instance.interceptors.response.use(res => {
    console.log(res);
    return res
  }, err => {
    console.log(err);
    return err
  })

  // 3.发送真正的网络请求
  return instance(config)
}


