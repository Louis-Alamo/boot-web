import * as productoClient from "./producto-client.js";
import { getIcon } from "../../../core/icons.js";

/**
 * Variables
 */
let botonBuscar;
let inputBuscar;
let tbody;


/**
 * INICIALIZACIÓN
 */


//Metodo que inicializa todo
export async function init() {

    
    await obtenerElemtosDelDOM();
    registrarEventos();
    await cargarProductos();

}

//Obtener elementos del DOM
async function obtenerElemtosDelDOM() {
    botonBuscar = document.getElementById("btn-buscar");
    inputBuscar = document.getElementById("input-buscar");
    tbody = document.getElementById("tabla-productos");
    
}


/**
 * REGISTRO DE EVENTOS
 */
function registrarEventos() {

    botonBuscar.addEventListener("click", buscarProductos);

    inputBuscar.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            buscarProductos();
        }

    });

    inputBuscar.addEventListener("input", () => {

        if (!inputBuscar.value.trim()) {
            cargarProductos();
        }

    });

}

/**
 * EVENTOS
 */
async function buscarProductos() {

    const texto = inputBuscar.value.trim();

    console.log(texto);

    await cargarProductos(texto);

}

/**
 * CARGA DE DATOS
 */
async function cargarProductos(filtro) {

    try {

        const productos = await productoClient.obtenerProductos();

        if(filtro) {
            renderizarTablaProductos(filtrarProductos(filtro, productos));
        } else {
            renderizarTablaProductos(productos);
        }


    } catch (error) {

        console.error(error);
        alert(error.message);

    }

}

/**
 * RENDERIZADO
 */
function renderizarTablaProductos(productos) {

    const html = productos
        .map(crearFilaProducto)
        .join("");

    tbody.innerHTML = html;

}

function filtrarProductos(texto, productos) {

    return productos.filter(producto => producto.nombre.includes(texto));

}

function crearFilaProducto(producto) {

    return `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.detalle}</td>
            <td>${producto.precio}</td>
            <td>${producto.stockInicial}</td>
            <td>${producto.categoria.nombre}</td>
            <td>${producto.proveedor.nombre}</td>
            <td>
                <div class="acciones">
                    <button
                        class="btn-icon btn-icon-editar"
                        data-action="editar"
                        data-id="${producto.id}">

                        ${getIcon("EDIT")}

                    </button>

                    <button
                        class="btn-icon btn-icon-eliminar"
                        data-action="eliminar"
                        data-id="${producto.id}">

                        ${getIcon("DELETE")}

                    </button>
                </div>
            </td>

        </tr>
    `;

}