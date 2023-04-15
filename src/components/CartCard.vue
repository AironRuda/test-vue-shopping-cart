<script setup>
import { store } from "../store.js";
import { ref } from "vue";

const props = defineProps(["product"]);

const cart = ref(store.cart);

let product = ref({ ...props.product });

const backgroundImage = product.value.img
  ? product.value.img
  : "https://placehold.co/600x400";

const increaseQuantity = (product) => {
  console.log("increase");
  console.log("product", product);
  cart.value.forEach((cartItem) => {
    if (cartItem.name == product.name) {
      cartItem.quantity++;
      console.log("cart", cart.value);
    }
  });
  //   store.increaseQuantity(product);
};

const decreaseQuantity = (product) => {
  store.decreaseQuantity(product);
  //   increaseQuantity(product) {
  //     this.cart.forEach((cartItem) => {
  //       if (cartItem.name == product.name) {
  //         if (cartItem.quantity >= product.stock) {
  //           maxItemsAlert();
  //         } else {
  //           cartItem.quantity++;
  //         }
  //       }
  //     });
  //   },
};
// const increaseQuantity = (product) => {
//   store.increaseQuantity(product);
// };
// const cart = ref(store.cart);
// cart.value.forEach((cartItem) => {
//   if (cartItem.name == product.name) product.value = cartItem.value;
// });

// const increaseNumber = () => {
//   //   console.log(product);
//   store.increaseQuantity(product.value);
//   console.log(cart.value);
//   //   console.log("increase");
//   //   product.value.quantity++;
//   //   if (product.value.quantity > product.value.stock) {
//   //     product.value.quantity = product.value.stock;
//   //     maxItemsAlert();
//   //   }
//   // console.log(cart.value);
//   // cart.value.forEach((cartItem) => {
//   //   if (cartItem.name == product.name) {
//   //     if (cartItem.quantity >= product.stock) {
//   //       maxItemsAlert();
//   //     } else {
//   //       cartItem.quantity++;
//   //     }
//   //   }
//   // });

//   // cart.forEach((cartItem) => {
//   //   if (cartItem.name == product.name) {
//   //     if (cartItem.quantity >= product.stock) {
//   //       maxItemsAlert();
//   //     } else {
//   //       cartItem.quantity++;
//   //     }
//   //   }
//   // });
// };

// const decreaseNumber = (product) => {
//   //   store.decreaseQuantity(product);
//   console.log("decrease");
// };
</script>

<template>
  <div class="grid grid-cols-4 gap-[5px] items-center m-2 p-2 rounded-md">
    <!-- Product -->
    <div class="w-13 bg-white shadow rounded">
      <div
        class="h-[100px] bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
      ></div>
      <div class="p-4 flex flex-col items-center">
        <h1 class="text-gray-800 text-center mt-1">{{ product.name }}</h1>
      </div>
    </div>
    <!-- buttons -->
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
    <!-- unit price -->
    <h1 class="text-gray-800 text-center mt-1">
      Unit price: <span class="font-bold"> ${{ product.unit_price }} </span>
    </h1>

    <!-- total -->
    <h1 class="text-gray-800 text-center mt-1">
      Total price:
      <span class="font-bold">
        ${{ product.quantity * product.unit_price }}
      </span>
    </h1>
  </div>
</template>
