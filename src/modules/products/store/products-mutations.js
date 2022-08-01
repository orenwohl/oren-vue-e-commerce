export default {
  setProducts(state, products) {
    console.log(products);
    state.products = products;
    console.log(state.products);
  },
};
