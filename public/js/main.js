$(document).ready(function(){
  var $mostrarTemas = $('#mostrarTemas');
  var todosLosTemas = {
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics'
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
    $contenedorTema.append("<h6>Número de tema: "+ tema.id +"</h6>");
    $contenedorTema.append("<h6><strong>Autor: </strong>"+tema.author_name +"</h6>");
    $contenedorTema.append("<h6><strong>Contenido: </strong><span class='willSearch'>"+ tema.content +"</span></h6>");
    $contenedorTema.append("<h6>Número de respuestas: "+ tema.responses_count +"</h6>");
    $mostrarTemas.append($contenedorTema);

  };

  $('#addTopic').on('click', function(){

    $.post(todosLosTemas.url, {
      'author_name': $('#autor-tema').val(),
      'content': $('#contenido').val()
    }, function(tema) {

      var $contenedorTema = $('<div />');
      $contenedorTema.addClass('jumbotron');
      $contenedorTema.append("<h6>Número de tema: "+ tema.id +"</h6>");
      $contenedorTema.append("<h6><strong>Autor: </strong>"+tema.author_name +"</h6>");
      $contenedorTema.append("<h6><strong>Contenido: </strong><span class='willSearch'>"+ tema.content +"</span></h6>");
      $contenedorTema.append("<h6>Número de respuestas: 0</h6>");
      $mostrarTemas.prepend($contenedorTema);

    });
    console.log('se esconde el modal');
    $('#myModal').modal('hide');
  })

  $('#btnSearch').on('click', function(){
    var word = $('#search').val().toLowerCase();
    if(word !== ''){
      $( ".jumbotron" ).hide();
      var element = $('.willSearch:contains('+ word +')');
      console.log(element);
      $( element ).closest( "div.jumbotron" ).show();
    } else {
      alert('Ingresa una palabra válida');
    }
  });

  cargarPagina();

});
