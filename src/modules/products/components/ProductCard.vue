<template>
  <div
    data
    class="lg:w-1/4 md:w-1/2 p-4 w-full border border-slate-400 bg-gray-300 shadow-md rounded-lg"
  >
    <slot>
      <a class="block relative h-48 rounded-lg overflow-hidden">
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block hover:scale-105 duration-500"
          :src="product.images[0]"
        />
      </a>
      <div class="mt-6 flex flex-col justify-center items-center">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {{ product.category }}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          {{ product.title }}
        </h2>
        <p class="mt-1">${{ product.price }}</p>
      </div>

      <div class="flex flex-col md:justify-center">
        <add-to-cart-btn
          @cart-click="cartClick"
          :click="click"
        ></add-to-cart-btn>
      </div>
    </slot>
  </div>
</template>

<script>
import AddToCartBtn from "../../../layouts/AddToCartBtn.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  emits: ["cart-click"],

  components: { AddToCartBtn },
  data() {
    return {
      click: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("cart", ["addItemToCart"]),

    cartClick() {
      const product = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        category: this.product.category,
        images: this.product.images[1],
        quantity: 1,
      };
      this.addItemToCart(product);
      // const button = document.querySelector(".cart-button");
      // let button = document.querySelector(".cart-button");
      // button.classList.add("clicked");
      console.log("cartClick");
      this.click = true;
      setTimeout(() => {
        this.click = false;
      }, 3000);
    },
  },
  computed: {
    cartClicked() {
      return this.click;
    },

    ...mapGetters("products", ["allProducts"]),
    ...mapGetters("cart", ["cart", "cartTotal"]),
  },
  componetns: {
    AddToCartBtn,
  },
};
</script>
