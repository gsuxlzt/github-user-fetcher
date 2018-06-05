import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Search from './components/Search.vue';
import User from './components/User.vue';
import Repo from './components/Repo.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Search },
    { path: '/:user', component: User },
    { path: '/:user/:repo', component: Repo }
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
