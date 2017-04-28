/**
 * Created by PengLunJian on 2017-4-26.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
