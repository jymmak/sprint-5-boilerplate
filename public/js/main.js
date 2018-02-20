$(document).ready(function(){
  var $mostrarTemas = $('#mostrarTemas');
  var todosLosTemas = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};


var cargarPagina = function() {
  mostrarTodosTemas();
  $('#add-form').submit(agregarTemaNuevo);
};

var mostrarTodosTemas = function() {
  $.getJSON(todosLosTemas.url, function(temas) {
    temas.forEach(crearTema);
  });
};

var crearTema = function(tema) {
  $contenedorTema.addClass('jumbotron');
  $contenedorTema.append("<h6>Número de tema: "+ tema.id +"</h6>");
  $contenedorTema.append("<h6><strong>Autor: </strong>"+tema.author_name +"</h6>");
  $contenedorTema.append("<h6><strong>Contenido: </strong>"+tema.content +"</h6>");
  $contenedorTema.append("<h6>Número de respuestas: "+ tema.responses_count +"</h6>");
  $mostrarTemas.append($contenedorTema);

};

var agregarTemaNuevo = function(e) {
  e.preventDefault();
  var titulo = $("#titulo-tema").val();
  var autor = $('#autor-tema').val();
  var contenido = $('#contenido').val();

  $.post(todosLosTemas.url, {
    author_name: autor,
    content: contenido,

  }, function(tema) {
    crearTema(tema);
    $('   #myModal').modal('hide');
 
  });
};

cargarPagina();

});
