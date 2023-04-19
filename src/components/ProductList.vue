<script setup>
import ProductCard from "./ProductCard.vue";
import { store } from "../store.js";

const products = store.stock;
const cart = store.cart;
</script>

<template>
  <div class="w-[100%] p-3 m-3 bg-sky-200 self-center">
    <h1 class="font-bold text-[60px] text-center">Products list</h1>
    <div
      v-if="cart.length == 0"
      class="flex flex-col items-center gap-2 md:grid grid-cols-2 self-center lg:grid-cols-3"
    >
      <ProductCard v-for="product in products" :product="product" />
    </div>
    <div v-else class="flex flex-col items-center gap-2">
      <ProductCard v-for="product in products" :product="product" />
    </div>
  </div>
</template>
