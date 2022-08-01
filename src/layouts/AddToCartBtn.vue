<template>
  <button
    @click="toogleClick"
    class="cart-button"
    :class="click ? 'clicked' : ''"
  >
    <span class="add-to-cart">Add To cart</span>
    <span class="added">Added</span>
    <font-awesome-icon
      icon="fa-solid fa-shopping-cart"
      class="fa-shopping-cart"
      size="xl"
    />
    <font-awesome-icon icon="fa-solid fa-box" class="fa-box" size="xl" />
  </button>
</template>
<script>
export default {
  props: ["click"],
  methods: {
    toogleClick() {
      this.$emit("cart-click");
    },
  },
};
</script>

<style scoped>
.cart-button {
  position: relative;

  padding: 10px;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: #64be14;
  outline: none;
  cursor: pointer;
  color: black;
  transition: 0.3s ease-in-out;
  overflow: hidden;
}
.cart-button:hover {
  background-color: #539d13;
}
.cart-button:active {
  transform: scale(0.9);
}

.cart-button .fa-shopping-cart {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: -10%;
  font-size: 2em;
  transform: translate(-50%, -50%);
}
.cart-button .fa-box {
  position: absolute;
  z-index: 3;
  top: -20%;
  left: 52%;
  font-size: 1.2em;
  transform: translate(-50%, -50%);
}
.cart-button span {
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  font-size: 1.2em;
  color: #fff;
  transform: translate(-50%, -50%);
}
.cart-button span.add-to-cart {
  color: black;
  opacity: 1;
}
.cart-button span.added {
  color: black;

  opacity: 0;
}

.cart-button.clicked .fa-shopping-cart {
  animation: cart 1.5s ease-in-out forwards;
}
.cart-button.clicked .fa-box {
  animation: box 1.5s ease-in-out forwards;
}
.cart-button.clicked span.add-to-cart {
  animation: txt1 1.5s ease-in-out forwards;
}
.cart-button.clicked span.added {
  animation: txt2 1.5s ease-in-out forwards;
}
@keyframes cart {
  0% {
    left: -10%;
  }
  40%,
  60% {
    left: 50%;
  }
  100% {
    left: 110%;
  }
}
@keyframes box {
  0%,
  40% {
    top: -20%;
  }
  60% {
    top: 40%;
    left: 52%;
  }
  100% {
    top: 40%;
    left: 112%;
  }
}
@keyframes txt1 {
  0% {
    opacity: 1;
  }
  20%,
  100% {
    opacity: 0;
  }
}
@keyframes txt2 {
  0%,
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
