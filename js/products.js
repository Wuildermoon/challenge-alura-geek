// importacion de funciones
import { APIRequest } from "./APIRequest.js";

const productList = document.querySelector("[data-products]");

// funcion que crea las cards de los productos en el html
function createCard(id, title, price, image) {
    const product = document.createElement("li");
    product.classList.add("card");

    product.innerHTML = `
        <img src="${image}" alt="${title}" class="card__img">
        <p class="card__name">${title}</p>
        <div class="card__info">
            <p class="card__description">$ ${price}</p>
            <img class="delete_img" src="./img/trash-icon.svg" alt="Basura" class="delete__img" data-id="${id}">
        </div>
    `;

    // Añadir el manejador de eventos para el botón de eliminar
    product.querySelector('.delete_img').addEventListener('click', event => APIRequest.deleteProduct(event));

    return product;
}

// funcion para renderizar los productos traidos desde la base de datos
async function listProduct() {
    try {
        const APIList = await APIRequest.productList();
        APIList.forEach(product => {
            productList.appendChild(createCard(product.id, product.name, product.price, product.image));
        });
    } catch {
        productList.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>`;
    }
}

// exportacion de funciones
export const product = {
    listProduct
}