import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import settings from './public/setting.vue'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.settings = settings

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
