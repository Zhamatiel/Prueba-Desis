var url = "./controlador/persona.controlador.php";
//esta funcion captura los datos del formulario y los envia en forma de json a persona.controlador.php
function Guardar() {
    $.ajax({
        url: url,
        data: retornarDatos("GUARDAR"),
        type: 'POST',
        dataType: 'json'
    }).done(function(response) {
        if (response == "OK") {
            MostrarAlerta("Éxito!", "Datos guardados con éxito", "success");
        } else {
            MostrarAlerta("Error!", response, "error");
        }
    }).fail(function(response) {
        console.log(response);
    });
}

function retornarDatos(accion) {
    var fuente = [];
    var checkboxes = document.getElementsByName('fuente');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        fuente.push(checkboxes[i].value);
      }
    }
    return {
        "nombre": document.getElementById('nombre').value,
        "alias": document.getElementById('alias').value,
        "rut": document.getElementById('rut').value,
        "email": document.getElementById('email').value,
        "region": document.getElementById('region').value,
        "comuna": document.getElementById('comuna').value,
        "candidato": document.getElementById('candidato').value,
        "comoSeEntero":fuente,
        "accion": accion
    };
}

function MostrarAlerta(titulo, descripcion, tipoAlerta) {
    Swal.fire(
        titulo,
        descripcion,
        tipoAlerta
    );
}
  

  
  
  