<script setup>
import { store } from "../store.js";
import { ref } from "vue";
import { errorAlert, successAlert } from "../utilities/alert";
import Swal from "sweetalert2";
const cart = ref(store.cart);
const total = ref(0);
const decreaseQuantity = (product) => {
  store.decreaseQuantity(product);
  total.value = store.calcTotal();
};
const increaseQuantity = (product) => {
  store.increaseQuantity(product);
  total.value = store.calcTotal();
};
const generateOrder = () => {
  store.cleanCart();
  if (cart.value.length === 0) {
    errorAlert("You tried to generate an order from an empty cart");
  } else {
    const order = {
      products: cart.value,
    };
    let orderResume = "";
    order.products.forEach(
      (orderItem) =>
        (orderResume +=
          `${orderItem.name}` + ": " + `${orderItem.quantity}` + ", ")
    );
    orderResume += "total: " + `${total.value}`;
    Swal.fire({
      title: "Resumen de orden",
      icon: "info",
      html: `${orderResume}`,
      showCloseButton: true,
    });
  }
};
</script>

<template>
  <div class="w-[90%] p-2 my-3 shadow bg-white rounded-md self-center">
    <h1 class="font-bold text-[60px] text-center">Cart</h1>

    <div
      class="grid grid-cols-4 gap-[5px] items-center m-2 p-2 rounded-md"
      v-for="product in cart"
    >
      <div class="w-13 bg-white shadow rounded">
        <div
          class="h-[100px] bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
          :style="{
            'background-image':
              'url(' +
              `${
                product.img ? 'product.img' : 'https://placehold.co/600x400'
              }` +
              ')',
          }"
        ></div>
        <div class="p-4 flex flex-col items-center">
          <h1 class="text-gray-800 text-center mt-1">{{ product.name }}</h1>
        </div>
      </div>
      <div class="inline-flex items-center mt-2">
        <button
          class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          @click="decreaseQuantity(product)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </button>
        <div
          class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
        >
          {{ product.quantity }}
        </div>
        <button
          class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
          @click="increaseQuantity(product)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <h1 class="text-gray-800 text-center mt-1">
        Unit price: <span class="font-bold"> ${{ product.unit_price }} </span>
      </h1>
      <h1 class="text-gray-800 text-center mt-1">
        Total price:
        <span class="font-bold">
          ${{ product.quantity * product.unit_price }}
        </span>
      </h1>
    </div>
    <div
      class="inline-flex items-center justify-between rounded-lg p-2 my-2 w-full"
    >
      <h1 class="text-gray-800 text-center mt-1">
        Total price: <span class="font-bold"> ${{ store.calcTotal() }} </span>
      </h1>
      <button
        class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        @click="generateOrder"
      >
        Generate order
      </button>
    </div>
  </div>
</template>
