import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import notifications from '@/components/notifications'
import messages from '@/components/messages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages
    }
  ]
})
