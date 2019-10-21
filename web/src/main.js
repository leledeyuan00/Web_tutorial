import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

//http接口请求 i axios 用于接口请求
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
