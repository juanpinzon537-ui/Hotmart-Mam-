function cambiarPestaña(indice) {
    // Capturamos todos los contenidos de las pestañas y los botones
    const pestañas = document.querySelectorAll('.tab-content');
    const botones = document.querySelectorAll('.nav-tab');

    // Removemos la clase 'active' de todos los elementos
    pestañas.forEach(pestaña => pestaña.classList.remove('active'));
    botones.forEach(boton => boton.classList.remove('active'));

    // Le añadimos la clase 'active' solo a la pestaña y botón seleccionados
    pestañas[indice].classList.add('active');
    botones[indice].classList.add('active');
}