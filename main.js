const fs = require('fs');

// Ruta al archivo input.txt
const filePath = 'input.txt';
const generatePattern = require('./generatePattern');
const dividirTextoEnPalabras = require('./dividirTextoEnPalabras')


// Leer el archivo input.txt
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  
  // Mostrar el contenido del archivo en la consola
  console.log('Contenido de input.txt:');
  console.log(data);
    // Dividir el texto en arrays basados en el carácter $
    const textos = data.split('$');
    // Suponiendo que tienes un array llamado "textos"
 console.log(textos);
     const arraySequences = textos.map(dividirTextoEnPalabras);
     console.log(arraySequences)
    const patternArray = arraySequences.map(generatePattern)
    console.log(patternArray);
    const input = "Luis tiene 31 años. ¿Cuál es la edad de Luis? La edad de Luis es 31 años."
    const inputPattern = generatePattern(dividirTextoEnPalabras(input))
    console.log(inputPattern)
});

module.exports