import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false

Vue.use(Vuex);
//Vue.use(axios);
Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
