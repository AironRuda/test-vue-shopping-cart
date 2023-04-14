import { reactive } from "vue";
import data from "./products.json";

export const store = reactive({
  stock: data.products,
  cart: [],
  addToCart(product) {
    this.cart.push(product);
  },
  increaseQuantity(product) {
    this.cart.forEach((cartItem) => {
      if (cartItem.name == product.name) {
        if (cartItem.quantity >= product.stock) {
          console.log("no more");
        } else {
          cartItem.quantity++;
        }
      }
    });
  },
  decreaseQuantity(product) {
    this.cart.forEach((cartItem) => {
      if (cartItem.name == product.name) {
        if (cartItem.quantity <= 0) {
          const index = this.cart.indexOf(product);
          this.cart.splice(index, 1);
        } else {
          cartItem.quantity--;
        }
      }
    });
  },
});
