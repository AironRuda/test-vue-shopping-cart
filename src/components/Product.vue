<script setup>
import { store } from "../store.js";
import Swal from "sweetalert2";
import { errorAlert, successAlert } from "../utilities/alert";

const products = store.stock;
const cart = store.cart;

const addCart = (product) => {
  const productCart = { ...product, quantity: 0 };
  if (cart.some((cartProduct) => cartProduct.name == product.name)) {
    errorAlert("El articulo ya está en el carrito!");
  } else {
    if (product.stock == 0) {
      errorAlert("No hay inventario de este producto");
    } else {
      store.addToCart(productCart);
      successAlert("Articulo agregado al carrito");
    }
  }
};
</script>

<template>
  <div class="w-[100%] p-3 m-3 md:w-[50%]">
    <h1 class="font-bold text-[60px] text-center">Product list</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="product in products"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" :src="product.img" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.name }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Articulos en inventario {{ product.stock }}
          </p>
          <a
            href="#"
            @click="addCart(product)"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar al carrito
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
