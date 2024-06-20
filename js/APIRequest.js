// importacion de funciones
import noProduct from "./main.js";

// función para traer los productos de la base de datos
async function productList() {
    const response = await fetch("http://localhost:3000/productos");
    const convertedresponse = await response.json();
    return convertedresponse;
}

// función para enviar productos a la base de datos
async function registerProduct(title, price, image) {
    const response = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: title,
            price: price,
            image: image,
        })
    });

    const convertedresponse = await response.json();

    if (!response.ok) {
        throw new Error("Ha ocurrido un error al registrar el producto");
    }

    return convertedresponse;
}

// función para eliminar un producto de la base de datos
async function deleteProduct(event) {
    event.preventDefault();
    const productId = event.target.dataset.id;

    try {
        const response = await fetch(`http://localhost:3000/productos/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorMsg = await response.text();
            throw new Error(`Error al eliminar el producto: ${errorMsg}`);
        }

        event.target.closest('.card').remove();

        noProduct();
    } catch (err) {
        console.error(err);
        alert(`Error al eliminar el producto: ${err.message}`);
    }
}

// exportación de funciones
export const APIRequest = {
    productList,
    registerProduct,
    deleteProduct
}