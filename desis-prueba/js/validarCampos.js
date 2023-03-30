function validarCampos() {
    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let alias = document.getElementById("alias").value;
    let rut = document.getElementById("rut").value;
    let email = document.getElementById("email").value;
    let region = document.getElementById("region").value;
    let comuna = document.getElementById("comuna").value;
    let candidato = document.getElementById("candidato").value;

    //se invoca la validacion del rut (validarRut.js) dependiendo del resulta proporciona informacion al usuario
    if(!validarRut(rut)) {
        MostrarAlerta("Error", "El RUT ingresado es inválido", "error");
        return;
    }

    //validar que se seleccionen minimo 2 checkbox 
    let fuentesSeleccionadas = document.querySelectorAll('input[name="fuente"]:checked');
    console.log(fuentesSeleccionadas.length)
    if (fuentesSeleccionadas.length < 2) {
      MostrarAlerta("Error", "Debe seleccionar al menos 2 opciones en Cómo se enteró de nosotros", "error");
      return;
    }

    //validaciones de input para que sean obligatorios y para limitar los caracteres segun corresponde
   switch (true) {
    case nombre === "":
      MostrarAlerta("Error", "El campo Nombre es obligatorio", "error");
      break;
    case alias === "":
      MostrarAlerta("Error", "El campo Alias es obligatorio", "error");
      break;
    case !validarAlias(alias):
      MostrarAlerta("Error", "El alias ingresado no es válido. Debe contener al menos 6 caracteres y contener letras y números.", "error");
      break;
    case rut === "":
      MostrarAlerta("Error", "El campo RUT es obligatorio", "error");
      break;
    case email === "":
      MostrarAlerta("Error", "El campo Email es obligatorio", "error");
      break;
    case !validarEmail(email):
      MostrarAlerta("Error", "El formato del correo debe ser el siguiente: Ejemplo@Ejemplo.cl", "error");
      break;
    case region === "":
      MostrarAlerta("Error", "Debe seleccionar una Región", "error");
      break;
    case comuna === "":
      MostrarAlerta("Error", "Debe seleccionar una Comuna", "error");
      break;
    case candidato === "":
      MostrarAlerta("Error", "Debe seleccionar un Candidato", "error");
      break;
    default:
      Guardar();
      break;
  } 

  }
  
  function validarCampoRut(event) {
    const regex = /[^0-9kK\.\-]/g;
    let valor = document.getElementById("rut").value; // obtener el valor del elemento con id "rut"
    valor = valor.replace(regex, '');
    valor = valor.substring(0, 12); // limitar el valor a 12 caracteres
    document.getElementById("rut").value = valor; // actualizar el valor del elemento con id "rut"
  }

  function validarAlias(alias) {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/; // Expresión regular que valida letras y números con una longitud mínima de 6 caracteres
    return regex.test(alias);
  }
  
  function validarEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }

  //controla las alertas que se muestran al usuario
  function MostrarAlerta(titulo, descripcion, tipoAlerta) {
    Swal.fire(
      titulo,
      descripcion,
      tipoAlerta
    );
  }
  