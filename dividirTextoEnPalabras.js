function dividirTextoEnPalabras(texto) {
    return texto.match(/[¿?.]|[\wáéíóúüñ]+/gi) || [];
  }

  module.exports = dividirTextoEnPalabras