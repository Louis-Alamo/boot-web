

function registrarEventosMenu() {

    document.querySelectorAll("[data-vista]").forEach(boton => {
        
        boton.addEventListener("click", () => {

            cargarVista(boton.dataset.vista);

        });


    });

}
