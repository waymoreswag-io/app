<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from "./components/NavBar";
export default {
  name: 'App',
  components: {NavBar},
  mounted() {
    this.initialise();
    window.ethereum.on('accountsChanged', async () => {
      await this.initialise();
    });
  },
  methods: {
    async initialise() {
      await this.$store.dispatch("web3/updateMetaMaskInstalled", this.isMetaMaskInstalled());
      await this.$store.dispatch("web3/updateMetaMaskConnected", await this.isMetaMaskConnected());
    },
    isMetaMaskInstalled() {
      return Boolean(window.ethereum && window.ethereum.isMetaMask);
    },
    async getAccounts() {
      const {ethereum} = window;
      const accounts = await ethereum.request({method: 'eth_accounts'});
      return accounts;
    },
    async isMetaMaskConnected() {
      const {ethereum} = window;
      const accounts = await ethereum.request({method: 'eth_accounts'});
      return accounts && accounts.length > 0;
    }
  }
};
</script>
