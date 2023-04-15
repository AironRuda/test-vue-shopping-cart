<script setup>
import CartCard from "./CartCard.vue";
import { store } from "../store.js";
import { ref } from "vue";
import { errorAlert, successAlert } from "../utilities/alert.js";
import Swal from "sweetalert2";

const cart = ref(store.cart);

const decreaseQuantity = (product) => {
  store.decreaseQuantity(product);
};
const increaseQuantity = (product) => {
  store.increaseQuantity(product);
};

const generateOrder = () => {
  store.cleanCart();
  if (cart.value.length === 0) {
    errorAlert("Intentaste generar una orden de un carrito vacio");
  } else {
    const order = {
      products: cart.value,
    };
    console.log(JSON.stringify(order));

    let orderResume = "";
    order.products.forEach(
      (orderItem) =>
        (orderResume +=
          `${orderItem.name}` + ": " + `${orderItem.quantity}` + ", ")
    );
    orderResume += "total: " + `${store.calcTotal()}`;

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
  <div class="w-[90%] p-2 my-3 shadow bg-white rounded-md self-center top-0">
    <!-- title -->
    <h1 class="font-bold text-[60px] text-center">Cart</h1>
    <!-- Cart -->
    <CartCard v-for="product in cart" :product="product" />

    <!-- Total -->
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
