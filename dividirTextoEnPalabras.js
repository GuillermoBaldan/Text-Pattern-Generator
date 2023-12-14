const separarSimbolos = require('./separarSimbolos');

function dividirTextoEnPalabras(texto) {
  const symbolArray = ["?", "¿", "."];
  let array =  texto.split(" ");
   array = array.flatMap((word, index) => (index < array.length - 1) ? [word, ' '] : [word]);
  array = separarSimbolos(array, symbolArray);
  return array;
}

module.exports = dividirTextoEnPalabras;
