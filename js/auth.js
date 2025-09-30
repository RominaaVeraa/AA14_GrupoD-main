// Seleccionamos todos los elementos del DOM con los que vamos a trabajar.
const botonesConmutar = document.querySelectorAll('.boton-conmutar');
const seccionesFormulario = document.querySelectorAll('.seccion-formulario');

botonesConmutar.forEach(botonClickeado => {

    botonClickeado.addEventListener('click', () => {
        
        // Si el botón presionado estaba activo no hace nada.
        if (botonClickeado.classList.contains('active')) {
            return;
        }

        const formularioObjetivo = botonClickeado.dataset.form;


        botonesConmutar.forEach(boton => {
            boton.classList.remove('active');
            boton.setAttribute('aria-selected', 'false');
        });

        // Se establece como activo/seleccionado al botón que fue apretado.
        botonClickeado.classList.add('active');
        botonClickeado.setAttribute('aria-selected', 'true');

        
        seccionesFormulario.forEach(seccion => {
            // Se compara la ID de cada sección con el ID del formulario a mostrar.
            if (seccion.id === `${formularioObjetivo}-section`) {
                // Si coinciden se muestra.
                seccion.classList.add('active');
                seccion.hidden = false;
            } else {
                // Si no coinciden se oculta.
                seccion.classList.remove('active');
                seccion.hidden = true;
            }
        });
    });
});

