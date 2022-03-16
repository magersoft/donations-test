import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { VTextField } from "vuetify/lib";
import VCurrencyField from "v-currency-field";

Vue.use(Vuetify);

Vue.component("v-text-field", VTextField);
Vue.use(VCurrencyField, {
  locale: "en-US",
  currencyDisplay: "symbol",
  decimalLength: 0,
  autoDecimalMode: true,
  min: null,
  max: 1e9,
  defaultValue: 0,
  valueAsInteger: true,
  allowNegative: false,
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#377eea",
      },
    },
  },
});
