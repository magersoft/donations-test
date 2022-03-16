import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL || "http://localhost:3000";
const api = axios.create({ baseURL: API_URL });

export default (Vue, { store }) => {
  api.interceptors.request.use((config) => {
    store.commit("core/setLoading");
    store.commit("core/clearNotify");
    return config;
  });

  api.interceptors.response.use(
    ({ data }) => {
      store.commit("core/removeLoading");
      return data;
    },
    (error) => {
      const { message } = error;

      store.commit("core/clearNotify");
      store.commit("core/setNotify", {
        active: true,
        type: "error",
        message,
      });

      store.commit("core/removeLoading");

      return Promise.reject(error);
    }
  );

  Vue.prototype.$api = api;
};

export { api };
