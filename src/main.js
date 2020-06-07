import Vue from 'vue'
import App from './App.vue'
import navBar from './components/nav-bar.vue'
import Content from './components/contentPage.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import VueRouter from 'vue-router'
import Routes from './router/index.js'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js'
import VueCarousel from '@chenfengyuan/vue-carousel';
import checkbox from 'vue-material-checkbox'
import store from './vuex/store'
Vue.use(checkbox)

Vue.use(VueCarousel);
window.user_profile = false;
window.invoiceNumber = "unknown";
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {

})



Vue.config.productionTip = false
Vue.use(VueRouter);

const router= new VueRouter({
    routes:Routes,
    mode: 'history',
  
  
});

Vue.component('navbar',navBar);
Vue.component('content-page',Content);


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})
