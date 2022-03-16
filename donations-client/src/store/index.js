import Vue from "vue";
import Vuex from "vuex";

import core from "./core";
import donate from "./donate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
    donate,
  },
});
