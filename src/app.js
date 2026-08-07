import { ROUTES } from "./core/paths.js";
import { registrarEventosMenu } from "./components/header/header.js";
import { init as initProductos } from "./modules/inventario/producto/producto-script.js";




/**
 * Carga de variables globales
 */


const header = document.getElementById("header");
const contenidoPrincipal = document.getElementById("contenido-principal");



async function inicializarApp() {
    await cargarPaginaInicial();
    await cargarVista("inventario"); //Solo desarrollo de la vista no mas
}

/**
 *
 * @param {string} destino: se le pasa para indicar cual es la proxima vista a cargar.
 *
 */
async function cargarVista (destino) {
    console.log(`Boton vista ${destino}`);
    
    switch (destino) {

        case "inventario":
            await cargarVistaProductos(ROUTES.VIEW.PRODUCTOS);
            break;
        
        case "proveedores":
            await cargarVistaProveedores(ROUTES.VIEW.PROVEEDOR);
            break;


    }



}

/**
 * Carga vistas
 */




async function cargarVistaProductos(ruta) {

    console.log("Cargando HTML");

    contenidoPrincipal.innerHTML = "";

    contenidoPrincipal.innerHTML = await obtenerContenidoHtml(ruta);
    console.log(document.getElementById("input-buscar"));
    console.log("HTML cargado");


    await initProductos();
}

async function cargarVistaProveedores(ruta) {

    contenidoPrincipal.innerHTML = await obtenerContenidoHtml(ruta);

    
}



/**
 *
 * FUNCIONES DE RENDERIZADO
 *
 */

async function cargarPaginaInicial() {

    const headerHtml = await obtenerContenidoHtml(ROUTES.COMPONENT.HEADER);

    //Contenido proximo

    //Cargamos la pagina
    header.innerHTML = headerHtml;
    await registrarEventosMenu(cargarVista);

}


/**
 * Funciones de ayuda
 */


async function obtenerContenidoHtml(path){

    try {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error("No se pudo acceder al archivo HTML");
        }

        return await response.text();


    }catch(error){
        console.log(error);
        //Implementar futuro modal de alertas personalizadas
    }
}


/**
 *
 * Carga de eventos
 *
 */


document.addEventListener("DOMContentLoaded", async () => {
    await inicializarApp();
});

