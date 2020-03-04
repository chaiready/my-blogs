import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    map_user_info: {}
  },
  mutations: {
    map_set_user_info(state,data) {
      this.state.userInfo = data
    }
  },
  actions: {},
  modules: {}
});
