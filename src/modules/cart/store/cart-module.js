import produtscActions from "./cart-actions";
import productsMutations from "./cart-mutations";
import productsGetters from "./cart-getters";

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
      cartTotal: 0,
    };
  },
  mutations: productsMutations,
  actions: produtscActions,
  getters: productsGetters,
};
