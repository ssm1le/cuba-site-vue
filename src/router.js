import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Main.vue'
import Menu from './views/Menu.vue'
import Events from './views/Events.vue'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
  ]
})
