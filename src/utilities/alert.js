import Swal from "sweetalert2";

export const errorAlert = (text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};
export const successAlert = (text) => {
  Swal.fire({
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
};
export const maxItemsAlert = () => {
  Swal.fire({
    icon: "warning",
    title: "Oops...",
    text: "You reached the maximum number of available products",
  });
};
