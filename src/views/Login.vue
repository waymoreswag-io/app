<template>
  <section class="container mt-10">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="6">
        <div class="mb-3">
          <div class="mb-3">
            <h1 class="h1">
              You need an Ethereum wallet to use WMS.
            </h1>
          </div>
          <div>
            <p class="muted-subheading">
              Connect with one of the below wallets to get started
            </p>
          </div>
        </div>
        <v-card outlined class="rounded-lg pa-5">
          <v-card-text>
            <v-list >
              <v-list-item @click="install" v-if="!installed">
                <v-list-item-avatar>
                  <v-img src="https://docs.metamask.io/metamask-fox.svg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>MetaMask</v-list-item-title>
                  <v-list-item-subtitle>Install Wallet</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>
                    ri-arrow-right-s-line
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click="connect" v-else-if="!connected" :disabled="loading">
                <v-list-item-avatar>
                  <v-img src="https://docs.metamask.io/metamask-fox.svg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>MetaMask</v-list-item-title>
                  <v-list-item-subtitle>Connect to Wallet</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>
                    ri-arrow-right-s-line
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-list-item v-else>
                <v-list-item-avatar>
                  <v-img src="https://docs.metamask.io/metamask-fox.svg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>MetaMask</v-list-item-title>
                  <v-list-item-subtitle>Connected</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="green">
                      ri-checkbox-circle-line
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import MetaMaskOnboarding from "@metamask/onboarding";
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
  name: "Login",
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters("web3", ["getMetaMaskInstalled", "getMetaMaskConnected"]),
    installed() {
      return this.getMetaMaskInstalled;
    },
    connected() {
      return this.getMetaMaskConnected;
    },
  },
  methods: {
    install() {
      this.loading = true;
      const forwarderOrigin = window.location.href;
      const onBoarding = new MetaMaskOnboarding({forwarderOrigin});
      try {
        onBoarding.startOnboarding();
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async connect() {
      this.loading = true;
      try {
        const {ethereum} = window;
        await ethereum.request({method: 'eth_requestAccounts'}).then(() => {
          const redirect = this.$route.query.redirect;
          if (redirect) {
            this.$router.push(redirect)
          } else {
            this.$router.push({name: 'Home'})
          }
        })
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>