function dividirTextoEnPalabras(texto) {
    return texto.match(/[¿?.]|[\wáéíóúü]+/g) || [];
  }
  
  const texto = "¿Cómo estás? Yo bien. ¿ Y tu? ";
  const arrayPalabras = dividirTextoEnPalabras(texto);
  
  console.log(arrayPalabras);
  