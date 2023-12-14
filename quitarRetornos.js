function quitarRetornos(phraseArray){
    return phraseArray.map(phrase => phrase.replace(/\r\n/g, '')).filter(Boolean);
  }
  
 
  
  const phraseArray = [
    'Guillermo tiene 37 años. ¿Cuál es la edad de Guillermo? La edad de Guillermo es 37 años.',       
    '\r\nEl coche es azul. ¿De qué color es el coche? El coche es de color azul.',
    '\r\n'
  ];
  
  //const resultado = quitarRetornos(phraseArray);
  //console.log(resultado);
  

  module.exports = quitarRetornos;