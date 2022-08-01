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
        <button
          class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
        >
          Add to cart
        </button>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
