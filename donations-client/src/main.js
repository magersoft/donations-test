import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import "./filters";

Vue.config.productionTip = false;

Vue.use(axios, { store });

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
