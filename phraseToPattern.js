const dividirTextoEnPalabras = require('./dividirTextoEnPalabras')
const generatePattern = require('./generatePattern')

const input = "Luis tiene 31 años. ¿Cuál es la edad de Luis?" ;
const patternGenerated = generatePattern(dividirTextoEnPalabras(input));
console.log(patternGenerated)
