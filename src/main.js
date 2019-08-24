import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/users';


import CardUser from '@/components/CardUser'
Vue.component('CardUser', CardUser)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
