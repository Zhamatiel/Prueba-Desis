function validarRut(rut) {

  // Primero separamos el RUT y su dígito verificador
  let valor = rut.replace(/\./g, ''); // eliminar los puntos del RUT
  valor = valor.replace('-', ''); // eliminar el guion del RUT
  cuerpo = valor.slice(0,-1);
  dv = valor.slice(-1).toUpperCase();

  // Si el cuerpo del RUT no tiene 8 o 9 dígitos, es inválido
  if(cuerpo.length < 8 || cuerpo.length > 9) return false;

  // Calcular dígito verificador
  suma = 0;
  multiplo = 2;
  for(i=1;i<=cuerpo.length;i++) {
      index = multiplo * valor.charAt(cuerpo.length - i);
      suma = suma + index;
      if(multiplo < 7) multiplo = multiplo + 1; else multiplo = 2;
  }
  dvEsperado = 11 - (suma % 11);
  dv = (dv == 'K')?10:dv;
  dv = (dv == 0)?11:dv;
  if(dvEsperado != dv) return false;

  // Si llegamos hasta aquí, el RUT es válido
  return true;
}
