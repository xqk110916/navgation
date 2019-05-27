import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index.vue'
import production from '../views/production.vue'
import simulation from '../views/simulation.vue'
import system from '../views/system.vue'
import test from '../views/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: Index
    },
    {
      path:'/production',
      component: production
    },
    {
      path:'/simulation',
      component: simulation
    },
    {
      path:'/system',
      component: system
    },
    {
      path:'/test',
      component: test
    },
  ]
})
