<script setup>
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import { store } from "./store";
</script>

<template>
  <div class="bg-sky-400">
    <Header />
    <div class="flex flex-col-reverse justify-start md:flex-row">
      <ProductList />
      <!-- <Cart /> -->
      <Cart v-if="store.cart.length != 0" />
    </div>
  </div>
</template>

<style scoped></style>
