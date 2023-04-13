<template>
  <div class="bg-red-400 w-[100%] p-3 m-3 md:w-[50%]">
    <h1>Product</h1>
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
            <button class="bg-blue-500 px-4 h-[25px] md:h-[50px]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../products.json";

const products = data.products;
console.log(products);
</script>
