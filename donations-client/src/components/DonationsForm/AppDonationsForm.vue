<template>
  <v-card elevation="4" class="donate-form" :loading="loading">
    <div class="ma-4">
      <v-btn-toggle v-model="internalAmount" group dense class="full-width">
        <div class="donate-form__btn-group">
          <v-btn
            v-for="item of values"
            :value="item"
            :key="item"
            :color="item === internalAmount ? 'primary' : 'default'"
            block
            @click="() => selectAmount(item)"
          >
            <span class="hidden-sm-and-down">
              {{ item | currency(currency.code) }}
            </span>
          </v-btn>
        </div>
      </v-btn-toggle>
      <v-form ref="form" @submit.prevent="onDonate" lazy-validation>
        <v-currency-field
          v-model="internalAmount"
          :prefix="currency.symbol"
          class="mt-10 mb-2"
          solo
          required
          :rules="currencyRule"
          @change="changeAmount"
        >
          <template #append>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text small v-bind="attrs" v-on="on">
                  {{ currency.code }}
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list flat>
                <v-list-item
                  v-for="currency in currencies"
                  v-model="selectedCurrency"
                  :color="
                    selectedCurrency.code !== currency.code ? 'primary' : 'dark'
                  "
                  :key="currency.name"
                  :value="currency.code"
                  :disabled="selectedCurrency.code === currency.code"
                  @click="() => selectCurrency(currency)"
                >
                  <v-list-item-title>
                    {{ currency.code }} | {{ currency.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-currency-field>
        <v-btn
          type="submit"
          color="primary"
          elevation="2"
          x-large
          block
          :disabled="loading"
        >
          Donate
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    amount: {
      type: Number,
      default: 0,
    },
    currencies: {
      type: Array,
      required: true,
    },
    currency: {
      type: Object,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    internalAmount: 0,
    amountIdx: 0,
    selectedCurrency: null,
    isChange: false,
    currencyRule: [(v) => parseInt(v) > 0 || "Amount must be greater than 0"],
  }),
  watch: {
    amount(value) {
      if (this.isChange) {
        this.internalAmount = value;
      }
    },
    values: {
      handler(values) {
        if (this.isChange) return;

        if (!this.internalAmount) {
          this.internalAmount = Math.min.apply(null, values);
        } else {
          this.internalAmount = this.amountIdx
            ? this.values[this.amountIdx]
            : Math.min.apply(null, values);
        }
      },
      immediate: true,
    },
    currency: {
      handler(value) {
        this.selectedCurrency = this.currencies.find(
          (item) => item.code === value.code
        );
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    selectCurrency(value) {
      this.selectedCurrency = value;
      this.$emit("select-currency", {
        ...this.selectedCurrency,
        amount: this.isChange ? this.internalAmount : undefined,
      });
    },
    selectAmount(value) {
      this.isChange = false;
      this.amountIdx = this.values.findIndex((v) => v === value);
    },
    changeAmount() {
      this.isChange = true;
      this.amountIdx = 0;
    },
    onDonate() {
      const valid = this.$refs.form.validate();

      if (!valid) return false;

      this.$emit("donate", {
        amount: this.internalAmount,
        currency: this.currency.code,
      });
    },
  },
};
</script>

<style lang="scss">
@import "./AppDonationsForm";
</style>
