$(document).ready(function() {
    // Llenar select de regiones
    $.ajax({
      url: './modelo/obtenerRegiones.php',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        var select = $('#region');
        select.empty();
        select.append($('<option>').val('').text('Seleccione una región'));
        $.each(response, function(index, item) {
          select.append($('<option>').val(item.region_id).text(item.region_nombre));
        });
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  
    // Llenar select de comunas al seleccionar una región
    $('#region').on('change', function() {
      var region_id = $(this).val();
      $.ajax({
        url: './modelo/obtenerRegiones.php',
        type: 'GET',
        dataType: 'json',
        data: { region_id: region_id },
        success: function(response) {
          var select = $('#comuna');
          select.empty();
          select.append($('<option>').val('').text('Seleccione una comuna'));
          $.each(response, function(index, item) {
            select.append($('<option>').val(item.comuna_id).text(item.comuna_nombre));
          });
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });
    });
  });
  