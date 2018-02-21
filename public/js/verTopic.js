$(document).ready(function(){
var topicId = getParameterByName();

$.getJSON(todosLosTemas.url, function() {
  console.log($mostrarTemas);

});


});
//Solo por propositos de debug
// if(topicId){
//   alert("El topic ID es:"+topicId);
// }
