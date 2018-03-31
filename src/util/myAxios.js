// // 写自己的逻辑
// import Vue from 'vue'
// import myAxios from './base'
// import allApi from './allApi'
//
// var xhr = {
//   get: function (url, params) {
//     return myAxios.get(allApi[url], {params})
//   }
// }
// var xhrp = {
//   post: function (url, data) {
//     return myAxios.post(allApi[url], data)
//   }
// }
// Vue.prototype.$axios = xhr
// Vue.prototype.$axiosp = xhrp
import Vue from 'vue'
import allapi from './allApi'
import base from './base'
import axios from 'axios'
// import { MessageBox } from 'element-ui';
// import { Message } from 'element-ui'
// import router from '../router'

let xhr = {

  get (url, params) {
    return new Promise((resolve, reject) => {
      base.get(allapi[url], {params}).then(res => {
        if (res.data.code !== 200) {
          // // MessageBox.alert(res.data.msg)
          //  MessageBox.confirm(res.data.msg, '提示', {
          //    confirmButtonText: '确定',
          //    // cancelButtonText: '取消',
          //    type: 'warning'
          //  }).then(() => {
          //    if(!res.data.ret){
          //      setTimeout(()=>{
          //        router.push({path:'/crmlogin'})
          //      },1500)
          //    }
          //  }).catch((err) => {
          //    console.log(err)
          //  });
          // Message({
          //   message: res.data.msg,
          //   type: 'warning'
          // })
        }
        // if (!res.data.ret && res.data.msg === '用户未登录') {
        //   setTimeout(() => {
        //     router.push({path: '/login'})
        //   }, 1500)
        // }
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      base.post(allapi[url], params).then(res => {
        if (res.data.code !== 200) {
          // Message({
          //   message: res.data.msg,
          //   type: 'warning'
          // })
        }
        // if (!res.data.ret && res.data.msg === '用户未登录') {
        //   console.log(res.data.ret)
        //   setTimeout(() => {
        //     router.push({path: '/login'})
        //   }, 1500)
        // }
        resolve(res.data)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  qiniuGet () {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/upload').then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

Vue.prototype.$axios = xhr
