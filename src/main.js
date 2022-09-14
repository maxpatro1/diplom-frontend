import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store';
import router from './router';


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


const app = new Vue({
  render: h => h(App),
  router,
  axios,
  store
})

store.dispatch('FETCH_USER').then(() => {
  app.$mount('#app')
})
