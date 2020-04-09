import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import mediaCenter from "./modules/mediaCenter";
import appointment from "./modules/appointment";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    mediaCenter,
    appointment
  },
  strict: true
});
