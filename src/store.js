import { reactive } from "vue";
import Swal from "sweetalert2";
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
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Alcanzaste el numero maximo de productos disponibles",
          });
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
});
