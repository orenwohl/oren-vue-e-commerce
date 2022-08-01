export default {
  cart: (state) => {
    return state.cart;
  },
  cartTotal: (state) => {
    return state.cartTotal;
  },
  cartTotalPrice: (state) => {
    return state.cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  },
};
