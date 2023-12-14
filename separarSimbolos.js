function separarSimbolos(array, symbolArray) {
    const symbols = symbolArray.map(escapeRegExp).join('|');
    const regex = new RegExp(`(${symbols})|\\b(${symbols})\\b`);
  
    const mergedArray = array.flatMap(word => word.split(regex).filter(Boolean));
    return mergedArray;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // Ejemplo de uso
 /*  const array = ["Guillermo?", " ", "Juan¿", " ", "Nacho."];
  const symbolArray = ["?", "¿", "."];
  
  const resultado = separarSimbolos(array, symbolArray);
  console.log(resultado); */

  module.exports = separarSimbolos;