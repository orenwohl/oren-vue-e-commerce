<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-2 gap-14 justify-center">
        <product-card
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-id="super-duper"
          data-aos-anchor-placement=" top-center"
          v-for="prod in allProducts"
          :key="prod.id"
          :product="prod"
        >
          <loading-spinner v-if="isLoading === true"></loading-spinner>
        </product-card>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../modules/products/components/ProductCard.vue";
import { mapActions, mapGetters } from "vuex";
import LoadingSpinner from "../layouts/LoadingSkeleton.vue";

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.fetchProducts();
  },

  methods: {
    ...mapActions("products", ["getProducts"]),

    fetchProducts() {
      this.getProducts();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },

  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    ...mapGetters("products", ["allProducts"]),
  },

  components: { ProductCard, LoadingSpinner },
};
</script>
