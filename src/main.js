import Vue from 'vue'
import VueRouter from 'vue-router';
import Component from 'vue-class-component'

Component.registerHooks([
  'beforeRouteLeave'
]);

import App from './App.vue'
import Quote from "./components/Quote";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:slug',
      name: 'quote',
      component: Quote,
    },
  ],
});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
