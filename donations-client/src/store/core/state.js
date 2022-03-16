export const defaultNotify = {
  active: false,
  type: null,
  message: null,
};

export default () => ({
  loading: false,
  notify: defaultNotify,
});
