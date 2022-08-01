export default {
  addItemToCart({ state, commit }, item) {
    if (state.cart.find((cartItem) => cartItem.id === item.id)) {
      console.log("incrementItemQuantity");
      commit("incrementItemQuantity", item);
    } else {
      commit("addItemToCart", item);
    }
  },
  removeItemFromCart({ state, commit }, item) {
    const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);
    if (cartItem.quantity > 1) {
      commit("decrementItemQuantity", item);
    } else {
      commit("removeItemFromCart", item);
    }
  },

  // commit("incrementItemQuantity", item);
  // } else {
  //   commit("addItemToCart", item);
  //   console.log("incrementItemQuantity");
};
