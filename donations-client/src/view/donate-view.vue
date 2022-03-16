<template>
  <v-col class="d-flex justify-center align-center">
    <app-donations-form
      v-if="hasCurrencies"
      :amount="amount"
      :currencies="currencies"
      :currency="currency"
      :values="values"
      :loading="loading"
      @donate="sendDonate"
      @select-currency="selectCurrency"
    />
    <transition name="fade">
      <app-loading v-if="loading && !initialized" />
    </transition>
  </v-col>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AppDonationsForm from "@/components/DonationsForm/AppDonationsForm";
import AppLoading from "@/components/Loading/AppLoading";

export default {
  components: { AppDonationsForm, AppLoading },
  data: () => ({
    initialized: false,
  }),
  created() {
    this.preFetch();
  },
  computed: {
    ...mapGetters({
      loading: "core/loading",
      currencies: "donate/currencies",
      currency: "donate/currency",
      values: "donate/values",
      amount: "donate/amount",
    }),
    hasCurrencies() {
      return !!this.currencies && !!this.currencies.length;
    },
  },
  methods: {
    ...mapActions({
      getDonationsData: "donate/getDonationsData",
      selectCurrency: "donate/selectCurrency",
      sendDonate: "donate/sendDonate",
    }),
    ...mapMutations({
      setNotify: "core/setNotify",
    }),
    async preFetch() {
      await this.getDonationsData();
      this.initialized = true;
    },
  },
};
</script>
