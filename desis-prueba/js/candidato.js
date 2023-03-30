$(document).ready(function() {
  $.ajax({
    url: './modelo/obtenerCandidato.php',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      var select = $('#candidato');
      $.each(response, function(index, item) {
        select.append($('<option>').val(item.id).text(item.nombre));
      });
    },
    error: function(xhr, status, error) {
      console.log(error);
    }
  });
});
