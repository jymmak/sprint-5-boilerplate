var todosLosTemas = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var $mostrarTemas = $('#mostrarTemas');
var cargarPagina = function () {
  mostrarTodosTemas();
  $('#add-form').submit(agregarTemaNuevo);
};
var mostrarTodosTemas = function () {
  $.getJSON(todosLosTemas.url, function (temas) {
    console.log(temas);
    temas.forEach(crearTema);
  });
};
var crearTema = function (tema) {
  var numRespuestas = tema.responses_count;
  var contenidoTema = tema.content;
  var $contenedorTema = $('<div />');
  var $tituloTema = $('<h1 />');
  var $contenido = $('<span />');
  $contenido.text(contenidoTema);
  var $autor = $('<p />');
  $autor.text(autor);
  var $contadorRespuestas = $('<p />');
  $contadorRespuestas.text(numRespuestas);

  $contenedorTema.addClass('jumbotron');
  $contadorRespuestas.addClass('small');

  $contenedorTema.append($tituloTema);
  $contenedorTema.append($contenido);
  $contenedorTema.append($autor);
  $contenedorTema.append($contadorRespuestas);

  $mostrarTemas.append($contenedorTema);
};

var agregarTemaNuevo = function (e) {
  e.preventDefault();

  var autor = $('#autor-tema').val();
  var contenido = $('#contenido').val();

  $.post(todosLosTemas.url, {
    author_name: autor,
    content: contenido,

  }, function (tema) {
    crearTema(tema);
    $('#myModal').modal('hide');
  });
};
