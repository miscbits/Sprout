import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./main.css";

import studentService from './services/StudentService';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  studentService,
  render: h => h(App)
}).$mount('#app')
