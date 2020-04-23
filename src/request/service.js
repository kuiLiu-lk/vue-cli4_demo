import Axios from 'axios'
import { Message } from 'element-ui'
import api from './api'

const instance = Axios.create({
    baseURL: api.baseUrl,
    timeout: 1000,
    headers: {}
  });

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    Message({
        msg: '请求出错',
        type: 'warning'
    })
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    Message({
        msg: '好像出现了一点问题，请稍后再试',
        type: 'warning'
    })
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default instance