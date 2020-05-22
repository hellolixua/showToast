/*
 * @Descripttion:
 * @Author: allan
 * @Date: 2020-05-12 15:01:57
 * @LastEditors: allan
 * @LastEditTime: 2020-05-22 15:26:21
 */

import Vue from 'vue'
import App from './App.vue'

// 引入showToast
// import showToast from '../showToast';  //引入文件夹里面的
import showToast from 'my-showtoast';

// 引入倒计时
// import CountDown from '../countDown/lib/components/countdown.vue'; // 引入node_modules里面的
import CountDown from '../countDown';

Vue.use(showToast)
Vue.component(CountDown.name, CountDown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
