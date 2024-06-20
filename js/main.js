// importacion de funciones
import { APIRequest } from "./APIRequest.js";
import { product } from "./products.js";
import { addProduct } from "./addProduct.js";

const form = document.querySelector("[data-form]");
const deleteButton = document.querySelector("[data-borrar]");

// funcion para evaluar si hay o no productos registrados, si hay se renderizan; si no se muestra un mensaje
export default async function noProduct() {
    const APIList = await APIRequest.productList();
    const productList = document.querySelector("[data-products]");

    if (APIList.length === 0) {
        productList.innerHTML = `<h2 class="alert">¡No se han agregado productos!<br> Intenta añadir más productos a trávez del formulario.<br> &#x1F605;</h2>`;
    } else {
        productList.innerHTML = "";
        product.listProduct();
    }
}

// evento al enviar el formulario para añadir un producto
form.addEventListener("submit", event => addProduct.sendProduct(event));

// llamada de la funcion que evalua si hay o no productos registrados
noProduct();