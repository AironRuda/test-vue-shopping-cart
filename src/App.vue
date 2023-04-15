<script setup>
import Slider from "./components/Slider.vue";
import ProductList from "./components/ProductList.vue";
import CartList from "./components/CartList.vue";
import { store } from "./store";
</script>

<template>
  <div class="bg-sky-400">
    <Slider />
    <div class="flex flex-col-reverse justify-start md:flex-row">
      <ProductList />
      <!-- <CartList /> -->
      <CartList v-if="store.cart.length != 0" />
    </div>
  </div>
</template>

<style scoped></style>
