function generatePhraseFromIdSequence(idSequence, dictionary) {
  const replacedSequence = idSequence.map(id => {
    const key = Object.keys(dictionary).find(key => dictionary[key] === id);
    return key !== undefined ? key : id;
  });

  return replacedSequence.join('');
}
    
    // Ejemplo de uso
    const idSequence = [
      0,  1, 2,  3, 4,  5,  6,
      7,  8, 9, 10, 0, 12, 13,
      9, 10, 0,  7, 2,  3,  4
    ];
    const dictionary = {
      '31': 2,
      Luis: 0,
      tiene: 1,
      'años': 3,
      '.': 4,
      '¿': 5,
      'Cuál': 6,
      es: 7,
      la: 8,
      edad: 9,
      de: 10,
      '?': 12,
      La: 13
    };
    
    const fraseGenerada = generatePhraseFromIdSequence(idSequence, dictionary);

   // console.log(fraseGenerada);
  //console.log('Hola Guillermo')

  module.exports = generatePhraseFromIdSequence;