import { reactive } from "vue";
import Swal from "sweetalert2";
import data from "./data.json";
import { maxItemsAlert } from "./utilities/alert";

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
            title: "Estas seguro?",
            text: "Si disminuyes la cantidad eliminarás el producto del carrito!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borralo!",
          }).then((result) => {
            if (result.isConfirmed) {
              this.cart.splice(index, 1);
              Swal.fire(
                "Borrrado!",
                "El producto ha sido eliminado del carrito.",
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
