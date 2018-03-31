// 放基础的域名
import axios from 'axios'
var instance = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  withCredentials: true
})
export default instance
