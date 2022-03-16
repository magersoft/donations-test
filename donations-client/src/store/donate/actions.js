import { api } from "@/plugins/axios";

export default {
  async getDonationsData({ commit }) {
    try {
      const { currencies, currency, presets } = await api.get("/currency");
      commit("setCurrencies", currencies);
      commit("setCurrency", currency);
      commit("setValues", presets);
    } catch (error) {
      throw new Error(error);
    }
  },
  async selectCurrency({ commit }, data) {
    const { amount, values, currency } = await api.post(
      "/currency/convert",
      data
    );
    commit("setAmount", amount);
    commit("setValues", values);
    commit("setCurrency", currency);
  },
  async sendDonate({ commit }, data) {
    try {
      const results = await api.post("/donate", data);

      if (results.ok) {
        commit(
          "core/setNotify",
          {
            message: "Thank you for your donation!",
            type: "success",
          },
          { root: true }
        );
      } else {
        commit(
          "core/setNotify",
          {
            message: results.error,
            type: "error",
          },
          { root: true }
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};
