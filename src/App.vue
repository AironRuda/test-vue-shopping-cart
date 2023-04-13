<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";
import Cart from "./components/Cart.vue";
</script>

<template>
  <Header />
  <div class="flex flex-col md:flex-row">
    <Product />
    <Cart />
  </div>
</template>

<style scoped></style>
