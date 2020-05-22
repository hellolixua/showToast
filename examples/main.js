/*
 * @Descripttion:
 * @Author: allan
 * @Date: 2020-05-12 15:01:57
 * @LastEditors: allan
 * @LastEditTime: 2020-05-22 13:43:00
 */

import Vue from 'vue'
import App from './App.vue'

// 引入showToast
// import showToast from '../showToast';  //引入文件夹里面的
import showToast from 'my-showtoast'; // 引入node_modules里面的

// 引入倒计时
Vue.use(showToast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
