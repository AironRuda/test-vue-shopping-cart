<script setup>
import { store } from "../store.js";
import Swal from "sweetalert2";

const products = store.stock;
const cart = store.cart;

const addCart = (product) => {
  const productCart = { ...product, cuantity: 0 };
  const index = cart.indexOf(product.name);
  if (cart.some((cartProduct) => cartProduct.name == product.name)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El articulo ya está en el carrito!",
    });
  } else {
    store.addToCart(productCart);
    Swal.fire({
      icon: "success",
      title: "Articulo agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
</script>

<template>
  <div class="w-[100%] p-3 m-3 md:w-[50%]">
    <h1 class="font-bold text-[60px] text-center">Product list</h1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div v-for="product in products" class="bg-slate-400 m-2 p-2 rounded-md">
        <div class="flex justify-center">
          <img
            :src="product.img"
            :alt="product.name"
            class="rounded-md h-[300px] md:h-[150px]"
          />
        </div>
        <div class="flex flex-col items-center border-t-2 border-black m-2">
          <p class="font-bold text-[30px] md:text-[20px]">
            {{ product.name }}
          </p>
          <p class="my-2">unit price: ${{ product.unit_price }}</p>
          <div class="flex border-2 border-black">
            <p
              class="flex items-center border-r-2 border-black px-4 h-[25px] md:h-[50px]"
            >
              {{ product.stock }}
            </p>
            <button
              class="bg-blue-500 px-4 h-[25px] md:h-[50px]"
              @click="addCart(product)"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
