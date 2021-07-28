import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mask: false,
    view: false,
    sec: false,
  },
  mutations: {
    SET_MASK: (state, data) => {
      state.mask = data;
    },
    OPEN_VIEW: (state, data) => {
      state.view = data;
    },
    OPEN_SEC: (state, data) => {
      state.sec = data;
    },
  },
  actions: {},
  modules: {},
});
