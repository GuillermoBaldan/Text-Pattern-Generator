function generateFraseFromIdSequence(idSequence, dictionary) {
   
  frase = idSequence.map(id => dictionary[id])
  frase = frase.join(' ');
    return frase;
  }
  
  // Ejemplo de uso
  const idSequence = [0, 1, 2, 3, 4, 5, 6];
  const dictionary = {
    0: 'hola',
    1: 'cómo',
    2: 'estás',
    3: 'guillermo',
    4: '¿',
    5: 'bien',
    6: '?'
  };
  
  const fraseGenerada = generateFraseFromIdSequence(idSequence, dictionary);
  console.log(fraseGenerada);
  