import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import router from './router'

Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')