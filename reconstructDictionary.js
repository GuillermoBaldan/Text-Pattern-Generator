function reconstructDictionary(inputDictionary, foundDictionary) {
    const reconstructedDictionary = { ...inputDictionary };
  
    for (const key in foundDictionary) {
      if (!(key in reconstructedDictionary)) {
        reconstructedDictionary[key] = foundDictionary[key];
      }
    }
  
    return reconstructedDictionary;
  }
  
  // Ejemplo de uso
  const inputPattern = {
    dictionary: {
      '31': 2,
      Luis: 0,
      tiene: 1,
      'años': 3,
      '.': 4
      // Otros elementos en inputPattern.dictionary...
    }
    // Otros datos en inputPattern...
  };
  
  const foundPattern = {
    dictionary: {
      '¿': 5,
      'Cuál': 6,
      es: 7,
      la: 8,
      edad: 9,
      de: 10,
      '?': 12,
      La: 13
      // Otros elementos en foundPattern.dictionary...
    }
    // Otros datos en foundPattern...
  };
  
  const reconstructedDictionary = reconstructDictionary(inputPattern.dictionary, foundPattern.dictionary);
  //console.log(reconstructedDictionary);
  
  module.exports = reconstructDictionary;