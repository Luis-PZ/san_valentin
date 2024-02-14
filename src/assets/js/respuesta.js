document.addEventListener('DOMContentLoaded', function () {
    var img_propuesta = document.getElementById('img_propuesta');
    var img_respuesta = document.getElementById('img_respuesta');
    var my_declaration = document.getElementById('my_declaration');
    var btn_si = document.getElementById('btn_si');

    var btn_no = document.getElementById('btn_no');
    var opciones = ['¿Segura?🥺', '¿Segura segura?🥺','Di que si🙁', 'Por favor🥺', 'No🙁'];

    var indiceActual = 0
  
    btn_no.addEventListener('click', function () {
        // Cambiar el texto del botón al hacer clic
        btn_no.innerHTML = opciones[indiceActual];

        // Incrementar el índice para la próxima opción
        indiceActual++;

        // Volver al principio si se alcanza el final del array
        if (indiceActual >= opciones.length) {
            indiceActual = 0;
        }
    });

    btn_si.addEventListener('click', function () {
        img_propuesta.style.display = 'none';
        img_respuesta.style.display = 'block';
        my_declaration.innerHTML = 'Nos vemos el 16 de Febrero de 2024 amorcito <p class="corazon">💖<p>';
        btn_si.style.display = 'none';
        btn_no.style.display = 'none'
    })
});