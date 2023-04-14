<script setup>
import { ref } from "vue";
import { errorAlert, successAlert } from "../utilities/alert";
import { store } from "../store.js";

const props = defineProps(["product"]);

let product = ref({ ...props.product, quantity: 0 });

const backgroundImage = product.value.img
  ? product.value.img
  : "https://placehold.co/600x400";

const cart = ref(store.cart);

const increaseNumber = () => {
  product.value.quantity++;
  if (product.value.quantity > product.value.stock) {
    product.value.quantity = product.value.stock;
    errorAlert("Alcanzaste el numero maximo de elementos disponibles");
  }
};
const decreaseNumber = () => {
  product.value.quantity--;
  if (product.value.quantity < 0) product.value.quantity = 0;
};
const addToCart = () => {
  if (product.value.quantity == 0) {
    product.value.quantity = 1;
  }
  if (
    cart.value.some((cartProduct) => cartProduct.name == product.value.name)
  ) {
    errorAlert("El articulo ya está en el carrito!");
  } else {
    store.addToCart(product.value);
    successAlert("Articulo agregado al carrito");
  }
};
</script>
<template>
  <div class="w-80 bg-white shadow rounded">
    <div
      class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
      <div>
        <span
          class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none"
          v-if="product.stock > 0"
        >
          available
        </span>
      </div>
    </div>
    <div class="p-4 flex flex-col items-center">
      <h1 class="text-gray-800 text-center mt-1">{{ product.name }}</h1>
      <p class="text-center text-gray-800 mt-1">$ {{ product.unit_price }}</p>
      <div class="inline-flex items-center mt-2">
        <button
          class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          @click="decreaseNumber()"
          :disabled="!product.stock"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </button>
        <div
          class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
        >
          {{ product.quantity }}
        </div>
        <button
          class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          @click="increaseNumber()"
          :disabled="!product.stock"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <button
        class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        @click="addToCart(product)"
        :disabled="!product.stock"
      >
        Add to cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
