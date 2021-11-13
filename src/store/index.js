import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const web3 = {
  namespaced: true,
  state: () => ({
    metaMaskInstalled: false,
    metaMaskConnected: false,
  }),
  getters: {
    getMetaMaskInstalled(state) {
      return state.metaMaskInstalled;
    },
    getMetaMaskConnected(state) {
      return state.metaMaskConnected;
    }
  },
  mutations: {
    setMetaMaskInstalled(state, value) {
      state.metaMaskInstalled = value;
    },
    setMetaMaskConnected(state, value) {
      state.metaMaskConnected = value;
    }
  },
  actions: {
    updateMetaMaskInstalled({commit}, value) {
      commit("setMetaMaskInstalled", value);
    },
    updateMetaMaskConnected({commit}, value) {
      commit("setMetaMaskConnected", value);
    },
  }
}

export default new Vuex.Store({
  modules: {
    web3: web3,
  }
});