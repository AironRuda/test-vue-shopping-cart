<script setup>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
import { store } from "./store";
console.log(store.cart.length);
</script>

<template>
  <div class="bg-orange-400">
    <Header />
    <div class="flex flex-col">
      <Cart v-if="store.cart.length != 0" />
      <Product />
    </div>
  </div>
</template>

<style scoped></style>
