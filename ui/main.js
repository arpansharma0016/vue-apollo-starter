import Vue from "vue";
import App from "./App.vue";
import apolloProvider from "./vue-apollo";

import VueRouter from 'vue-router';

import router from "./router"

import { store } from "./store";

import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
Vue.use(Vuetify)

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
