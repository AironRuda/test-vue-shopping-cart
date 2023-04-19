import { reactive } from "vue";
import Swal from "sweetalert2";
import { products } from "./data.json";
import { maxItemsAlert } from "./utilities/alert";
import { localData, data2 } from "./api/info.js";

export const store = reactive({
  // localData: localData,
  // apiData: apiData,
  stock: localData,
  cart: [],

  increaseQuantity(product) {
    this.cart.forEach((cartItem) => {
      if (cartItem.id == product.id) {
        if (cartItem.quantity >= product.stock) {
          maxItemsAlert();
        } else {
          cartItem.quantity++;
        }
      }
    });
  },
  decreaseQuantity(product) {
    this.cart.forEach((cartItem) => {
      if (cartItem.id == product.id) {
        if (cartItem.quantity <= 0) {
          const index = this.cart.indexOf(product);

          Swal.fire({
            title: "Are you sure?",
            text: "If you decrease the quantity you will remove the product from the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              this.cart.splice(index, 1);
              Swal.fire(
                "Deleted!!",
                "The product has been removed from the cart.",
                "success"
              );
            }
          });
        } else {
          cartItem.quantity--;
        }
      }
    });
  },
  calcTotal() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  },
  cleanCart() {
    this.cart.forEach((cartItem) => {
      if (cartItem.quantity == 0) {
        const index = this.cart.indexOf(cartItem);
        this.cart.splice(index, 1);
      }
    });
  },
});
