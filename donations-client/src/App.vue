<template>
  <v-app class="app">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Donations</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/magersoft/donations-test"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="app-container">
        <v-row class="full-height">
          <donate-view />
        </v-row>
      </v-container>
    </v-main>

    <v-alert
      :value="notify.active"
      :type="notify.type"
      elevation="4"
      transition="scale-transition"
      class="app-alert"
    >
      {{ notify.message }}
    </v-alert>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import DonateView from "./view/donate-view";

export default {
  name: "App",
  components: { DonateView },
  computed: {
    ...mapGetters({
      notify: "core/notify",
    }),
  },
};
</script>

<style lang="scss">
@import "./scss/index";
</style>
