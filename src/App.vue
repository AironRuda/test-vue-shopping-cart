<script setup>
import Slider from "./components/Slider.vue";
import ProductList from "./components/ProductList.vue";
import CartList from "./components/CartList.vue";
import { store } from "./store";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="bg-sky-400">
    <Slider />
    <div class="flex flex-col-reverse justify-center md:flex-row">
      <ProductList />
      <!-- <CartList /> -->
      <CartList v-if="store.cart.length != 0" />
    </div>
  </div>
</template>

<style scoped></style>
