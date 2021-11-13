<template>
  <v-app-bar
      app
      color="white"
      class="soft-shadow"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-btn rounded text :to="{name: 'Create'}">Create</v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mr-2" icon :to="{name: 'Login'}" v-if="!connected">
      <v-icon>ri-wallet-3-line</v-icon>
    </v-btn>
    <v-btn class="mr-2" icon v-if="connected">
      <v-icon>ri-account-box-line</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters("web3", ["getMetaMaskInstalled", "getMetaMaskConnected"]),
    installed() {
      return this.getMetaMaskInstalled;
    },
    connected() {
      return this.getMetaMaskConnected;
    },
  },
}
</script>

<style scoped>

</style>