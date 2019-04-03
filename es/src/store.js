import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aside: true,
    footer: false,
  },
  getters: {
    aside: state => state.aside,
    footer: state => state.footer,
  },
  mutations: {
    setAside(state, status) {
      state.aside = status
    },
    setFooter(state, status) {
      state.aside = status
    },
  },
  actions: {
    setAside({ commit }, status) {
      commit('setAside', status)
    },
    setFooter({ commit }, status) {
      commit('setFooter', status)
    },
  },
});
