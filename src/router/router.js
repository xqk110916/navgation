import Vue from 'vue'
import Router from 'vue-router'

import production from '../views/production.vue'
import simulation from '../views/simulation.vue'
import system from '../views/system.vue'
import test from '../views/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: system
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
      path:'/test',
      component: test
    },
  ]
})
