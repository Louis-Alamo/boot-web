import { ROUTES } from "./core/paths";




/**
 * Carga de variables globales
 */


const contenido = document.getElementById("contenido-principal");



async function inicializarApp() {
    await cargarPaginaInicial();
}

/**
 *
 * @param {string} destino: se le pasa para indicar cual es la proxima vista a cargar.
 *
 */
function cargarVista (destino) {

}



/**
 *
 * FUNCIONES DE RENDERIZADO
 *
 */

async function cargarPaginaInicial() {

    const headerHtml = await obtenerContenidoHtml(ROUTES.COMPONENT.HEADER);

    contenido.innerHTML += headerHtml;

    //Contenido proximo

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

