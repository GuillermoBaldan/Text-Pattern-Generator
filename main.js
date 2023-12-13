const fs = require('fs');

// Ruta al archivo input.txt
const filePath = 'input.txt';
const generateDictionary = require('./generatePattern');
//Functions
function dividirTextoEnPalabras(texto) {
    return texto.match(/[¿?.]|[\wáéíóúü]+/g) || [];
  }


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
});
