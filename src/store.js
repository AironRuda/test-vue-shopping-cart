import { reactive } from "vue";
import data from "./products.json";

export const store = reactive({
  stock: data.products,
  cart: [],
  addToCart(product) {
    this.cart.push(product);
  },
});
