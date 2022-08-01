export default {
  incrementItemQuantity(state, item) {
    state.cart.find((cartItem) => cartItem.id === item.id).quantity++;
    state.cartTotal += 1;
  },

  addItemToCart(state, item) {
    console.log(state.cart);
    state.cart.push(item);

    state.cartTotal += 1;
  },
  decrementItemQuantity(state, item) {
    state.cart.find((cartItem) => cartItem.id === item.id).quantity--;
    state.cartTotal -= 1;
  },
  removeItemFromCart(state, item) {
    const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);
    state.cart.splice(state.cart.indexOf(cartItem), 1);
    state.cartTotal -= cartItem.quantity;
  },
};
