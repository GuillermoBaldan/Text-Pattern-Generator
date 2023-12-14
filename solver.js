// script.js
const argumento = process.argv.slice(2).join(' ');


const fs = require('fs');

// Ruta al archivo input.txt
const filePath = 'input.txt';
const generatePattern = require('./generatePattern');
const dividirTextoEnPalabras = require('./dividirTextoEnPalabras')
const findPatternByPrefix = require('./findPatternByPrefix');
const generatePhraseFromIdSequence = require('./generatePhraseFromIdSequence');
const reconstructDictionary = require('./reconstructDictionary');


function main(data,argumento){
 // Mostrar el contenido del archivo en la consola
 //console.log('Contenido de input.txt:');
 //console.log(data);
   // Dividir el texto en arrays basados en el carácter $
   const textos = data.split('$');
   // Suponiendo que tienes un array llamado "textos"
//console.log(textos);
    const arraySequences = textos.map(dividirTextoEnPalabras);
    console.log(arraySequences)
   const patternArray = arraySequences.map(generatePattern)
   //console.log(patternArray);
 /*   const input = "Luis tiene 31 años. ¿Cuál es la edad de Luis? La edad de Luis es 31 años." */
   const inputPattern = generatePattern(dividirTextoEnPalabras(argumento))
   //console.log(inputPattern)
   const foundPattern = findPatternByPrefix(inputPattern,patternArray);
   //console.log(foundPattern);
   //console.log(inputPattern.dictionary)
   //console.log(foundPattern.idSequence)
   reconstructedDictionary = reconstructDictionary(inputPattern.dictionary,foundPattern.dictionary);
   const fraseGenerada  = generatePhraseFromIdSequence(foundPattern.idSequence,reconstructedDictionary);
   //console.log(fraseGenerada);
}

// Leer el archivo input.txt
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    main(data,argumento);
   
  });