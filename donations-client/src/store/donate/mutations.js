export default {
  setAmount(state, payload) {
    state.amount = payload;
  },
  setCurrencies(state, payload) {
    state.currencies = payload;
  },
  setCurrency(state, currency) {
    state.currency = currency;
  },
  setValues(state, payload) {
    state.values = payload;
  },
};
