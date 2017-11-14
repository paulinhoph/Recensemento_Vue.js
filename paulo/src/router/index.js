import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Trabalho from '@/components/Trabalho'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Trabalho',
      name: 'Trabalho',
      component: Trabalho
    }
  ]
})
