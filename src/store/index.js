import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
  },
  plugins: [createPersistedState({
    key: 'PHARMATRACK',
    paths: [],
  })],
  namespaced: true,
});

export default store;
