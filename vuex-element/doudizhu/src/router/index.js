import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Index'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import GameHall from '@/components/hall/GameHall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginBox',
      component: Login
    },
    {
      path: '/register',
      name: 'registerBox',
      component: Register
    },
    {
      path: '/gamehall',
      name: 'gamehallBox',
      component: GameHall
    }
  ]
})
