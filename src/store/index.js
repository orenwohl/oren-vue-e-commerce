import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import productsModule from "@/modules/products/store/products-module";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   products: [],
  //   cart: [],
  //   cartTotal: 0,
  // },
  // getters: {
  //   products: (state) => {
  //     return state.products;
  //   },
  // },
  // mutations: {
  //   setProducts(state, products) {
  //     state.products = products;
  //   },
  // },
  // actions: {
  //   getProducts({ commit }) {
  //     axios.get("https://dummyjson.com/products").then((response) => {
  //       commit("setProducts", response.data.products);
  //       console.log(response.data.products);
  //     });
  //   },
  // },

  modules: {
    products: productsModule,
  },
});
