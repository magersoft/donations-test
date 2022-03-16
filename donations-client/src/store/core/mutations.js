import { defaultNotify } from "./state";

export default {
  setLoading(state) {
    state.loading = true;
  },
  removeLoading(state) {
    state.loading = false;
  },
  setNotify(state, payload) {
    state.notify = payload;
  },
  clearNotify(state) {
    state.notify = defaultNotify;
  },
};
