<template>
  <div>
    <header class="text-white text-center font-bold py-7 text-4xl mx-auto">
      CART
    </header>
    <div class="flex flex-col md:h-screen mx-12 last:mb-6">
      <div class="text-white">
        <div class="flex flex-col justify-center space-y-7">
          <div
            class="flex flex-col space-y-9 md:flex-row border-b border-t text-center justify-between items-center p-10 bg-gray-600 rounded-3xl border-gray-300 translate-x-3 duration-200"
            v-for="item in cart"
            :key="item.id"
          >
            <div class="h-36 w-36 flex justify-center">
              <img
                class="rounded-xl shadow-md shadow-black"
                :src="item.images"
                alt=""
              />
            </div>
            <div class="flex justify-center md:font-bold relative">
              <label
                class="absolute bottom-8 text-xs text-slate-400 shadow-sm opacity-90 font-light uppercase"
                for=""
                >category</label
              >
              {{ item.category }}
            </div>
            <div class="flex justify-center font-bold relative">
              <label
                class="absolute bottom-8 text-xs text-slate-400 shadow-sm opacity-90 font-light uppercase"
                for=""
                >product</label
              >
              {{ item.title }}
            </div>
            <div class="flex justify-center font-bold relative">
              <label
                class="absolute bottom-8 text-xs text-slate-400 shadow-sm opacity-90 font-light uppercase"
                for=""
                >quantity</label
              >{{ item.quantity }}
            </div>
            <div class="flex justify-centerfont-bold relative">
              <label
                class="absolute bottom-8 text-xs text-slate-400 shadow-sm opacity-90 font-light uppercase"
                for=""
                >price</label
              >{{ item.price * item.quantity }}
            </div>
            <div>
              <button
                @click="removeItemFromCart(item)"
                class="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg"
              >
                <div
                  class="px-8 py-4 duration-150 bg-blue-500 rounded-lg hover:bg-blue-700"
                >
                  Remove From Cart
                </div>
              </button>
            </div>
          </div>
          <div
            v-if="cartTotal > 1"
            class="text-white text-4xl text-center bg-slate-600 mb-32"
          >
            CART TOTAL
            <div>{{ cartTotalPrice }} $</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("cart", ["removeItemFromCart"]),
  },
  computed: {
    ...mapGetters("cart", ["cart", "cartTotal", "cartTotalPrice"]),
  },
};
</script>
