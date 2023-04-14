<script setup>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
</script>

<template>
  <div class="bg-orange-400">
    <Header />
    <div class="flex flex-col">
      <Cart />
      <Product />
    </div>
  </div>
</template>

<style scoped></style>
