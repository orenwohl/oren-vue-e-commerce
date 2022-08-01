import produtscActions from "./products-actions";
import productsMutations from "./products-mutations";
import productsGetters from "./products-getters";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  mutations: productsMutations,
  actions: produtscActions,
  getters: productsGetters,
};
