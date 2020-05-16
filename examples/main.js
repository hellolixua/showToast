
import Vue from 'vue'
import App from './App.vue'
// import showToast from '../showToast';
import showToast from 'my-showtoast';

Vue.use(showToast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
