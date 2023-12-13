function generateDictionary(arr) {
    const dictionary = {};
    
    arr.forEach((word, index) => {
      if (!(word in dictionary)) {
        dictionary[word] = index;
      }
    });
  
    const idSequence = arr.map(word => dictionary[word]);
  
    return {
      sequence: arr,
      dictionary: dictionary,
      idSequence: idSequence
    };
  }
  
  // Ejemplo de uso
  const arrayInput = ['hola', 'adiós', 'hola', 'cómo', 'estás', 'hola'];
  const result = generateDictionary(arrayInput);
  console.log(result);
  
  module.exports = generateDictionary;