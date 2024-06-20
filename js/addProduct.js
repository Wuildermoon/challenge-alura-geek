// importación de funciones
import { APIRequest } from "./APIRequest.js";

// función para añadir un producto a la base de datos
async function sendProduct(event) {
    event.preventDefault();

    const title = document.querySelector("[data-form-name]").value;
    const price = document.querySelector("[data-form-price]").value;
    const image = document.querySelector("[data-form-image]").value;

    try {
        await APIRequest.registerProduct(title, price, image);
    } catch (err) {
        alert(err);
    }
}

// exportación de funciones
export const addProduct = {
    sendProduct,
}