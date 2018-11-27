import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueCarousel);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAg1__ca_pGd4q9Jw9F3yN_f4pVt0PX6pk',
    libraries: 'geometry,drawing,places',
  },
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')