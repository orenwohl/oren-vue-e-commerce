<template>
  <div
    class="bg-gray-600 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md: md:px-24 lg:px-8"
  >
    >
    <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-lime-500"
            >Product</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-lime-500"
            >Features</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-lime-500"
            >Pricing</a
          >
        </li>
      </ul>
      <a
        href="/"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center lg:mx-auto hover:text-lime-500"
      >
        <svg
          class="w-8 text-white"
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span
          class="ml-2 text-xl font-bold tracking-wide text-white uppercase hover:text-lime-500"
          >oren</span
        >
      </a>
      <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Sign in"
            title="Sign in"
            class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-lime-500"
            >Sign in</a
          >
        </li>

        <li>
          <a
            href="/shopping-cart "
            class="inline-flex items-center relative justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            <router-link to="/shopping-cart" class="text-white">
              <font-awesome-icon
                icon="fa-solid fa-shopping-cart"
                class="text-white hover:text-lime-500 duration-200"
                size="xl"
              />
            </router-link>

            <span
              class="absolute top-0 right-0 transition-all active:"
              :class="cartTotal ? ' ' : 'text-white'"
              >{{ cartTotal }}</span
            >
          </a>
        </li>
      </ul>
      <div class="ml-auto z-20 lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 active:animate-ping transition-all duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div
          v-if="isMenuOpen"
          class="absolute top-0 left-0 w-full translate-x--7"
        >
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center text-black"
                >
                  <svg
                    class="w-8 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                  </svg>
                  <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >Oren</span
                  >
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline hover:animate-ping"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Product</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Features</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-widetext-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Sign in"
                    title="Sign in"
                    class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Sign in</a
                  >
                </li>
                <li>
                  <router-link to="/shopping-cart" class="text-white">
                    <a
                      class="relative font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-shopping-cart"
                        class="text-black"
                        size="xl"
                      />
                      <span class="absolute">{{ cartTotal }}</span>
                    </a>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-cart-shopping"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  computed: {
    ...mapGetters("cart", ["cart", "cartTotal"]),
  },
};
</script>
