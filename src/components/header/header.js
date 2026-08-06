

export function registrarEventosMenu(funcion) {

    document.querySelectorAll("[data-vista]").forEach(boton => {
        
        boton.addEventListener("click", () => {

            funcion(boton.dataset.vista);

        });
    });

}
