<script setup>
import { store } from "../store.js";
import { ref } from "vue";
const cart = ref(store.cart);

const decreaseQuantity = (product) => {
  store.decreaseQuantity(product);
};
const increaseQuantity = (product) => {
  store.increaseQuantity(product);
};
</script>

<template>
  <div class="w-[100%] p-2 border-2 border-black md:w-[50%]">
    <h1 class="font-bold text-[60px] text-center">Cart</h1>

    <div
      class="flex flex-row items-center justify-between m-2 p-2 bg-green-300 rounded-md"
      v-for="product in cart"
    >
      <div class="flex flex-col items-center">
        <img
          :src="product.img"
          :alt="product.name"
          class="rounded-md h-[100px]"
        />
        <p class="font-bold">{{ product.name }}</p>
      </div>
      <div
        class="flex flex-row border-2 items-center justify-center h-[50px] rounded-md bg-green-200"
      >
        <button
          class="px-3 border-r-2 h-[50px]"
          @click="decreaseQuantity(product)"
        >
          -
        </button>
        <div class="px-3">{{ product.quantity }}</div>
        <button
          class="px-3 border-l-2 h-[50px]"
          @click="increaseQuantity(product)"
        >
          +
        </button>
      </div>
      <div class="unit-price">{{ product.unit_price }}</div>
      <div class="price-total">{{ product.quantity * product.unit_price }}</div>
    </div>
  </div>
</template>
