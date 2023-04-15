import { reactive } from "vue";
import Swal from "sweetalert2";
import data from "./data.json";
import { maxItemsAlert } from "./utilities/alert";

export const store = reactive({
  stock: data.products,
  cart: [],
  increaseQuantity(product) {
    this.cart.forEach((cartItem) => {
      if (cartItem.name == product.name) {
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
      if (cartItem.name == product.name) {
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
      total += item.quantity * item.unit_price;
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
