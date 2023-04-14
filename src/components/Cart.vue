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
  <div
    class="w-[90%] p-2 my-3 border-2 border-black bg-white rounded-md self-center"
  >
    <h1 class="font-bold text-[60px] text-center">Cart</h1>

    <div
      class="grid grid-cols-4 items-center m-2 p-2 bg-orange-300 rounded-md"
      v-for="product in cart"
    >
      <div class="flex flex-col items-center">
        <img
          :src="product.img"
          :alt="product.name"
          class="rounded-md h-[100px]"
        />
        <p class="font-bold text-center">{{ product.name }}</p>
      </div>
      <div
        class="flex flex-row border-2 items-center justify-center h-[50px] rounded-md bg-orange-200 font-bold"
      >
        <button
          class="w-full border-r-2 h-[50px]"
          @click="decreaseQuantity(product)"
        >
          <span>-</span>
        </button>
        <div class="px-3">{{ product.quantity }}</div>

        <button
          class="w-full border-l-2 h-[50px]"
          @click="increaseQuantity(product)"
        >
          <span>+</span>
        </button>
      </div>
      <div class="text-center">
        <p>Precio por unidad</p>
        <p class="font-bold">$ {{ product.unit_price }}</p>
      </div>
      <div class="text-center">
        <p>Precio total</p>
        <p class="font-bold">$ {{ product.quantity * product.unit_price }}</p>
      </div>
    </div>
    <div>total</div>
  </div>
</template>
