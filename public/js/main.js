$(document).ready(function() {
  var $mostrarTemas = $('#mostrarTemas');
  var todosLosTemas = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
  };

  var cargarPagina = function() {
    mostrarTodosTemas();
  };

  var mostrarTodosTemas = function() {
    $.getJSON(todosLosTemas.url, function(temas) {
      temas.forEach(crearTema);
    });
  };

  var crearTema = function(tema) {
    var $contenedorTema = $('<div />');
    $contenedorTema.addClass('jumbotron');
    $contenedorTema.append('<h6>Número de tema: ' + tema.id + '</h6>');
    $contenedorTema.append('<h6><strong>Autor: </strong>' + tema.author_name + '</h6>');
    $contenedorTema.append('<h6><strong>Contenido: </strong>' + tema.content + '</h6>');
    $contenedorTema.append('<h6>Número de respuestas: ' + tema.responses_count + '</h6>');
    $mostrarTemas.append($contenedorTema);
  };

  $('#addTopic').on('click', function() {
    $.post(todosLosTemas.url, {
      'author_name': $('#autor-tema').val(),
      'content': $('#contenido').val()
    }, function(tema) {
      var $contenedorTema = $('<div />');
      $contenedorTema.addClass('jumbotron');
      $contenedorTema.append('<h6>Número de tema: ' + tema.id + '</h6>');
      $contenedorTema.append('<h6><strong>Autor: </strong>' + tema.author_name + '</h6>');
      $contenedorTema.append('<h6><strong>Contenido: </strong>' + tema.content + '</h6>');
      $contenedorTema.append('<h6>Número de respuestas: 0</h6>');
      $mostrarTemas.prepend($contenedorTema);
    });
    console.log('se esconde el modal');
    $('#myModal').modal('hide');
  });

  $('#btnSearch').on('click', function() {
    $('.jumbotron').hide();
    var word = $('#search').val().toLowerCase();
    $('. jumbotron:contains(' + word + ')').show();
  });

  cargarPagina();
});
