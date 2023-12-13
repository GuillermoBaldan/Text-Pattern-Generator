function findPattern(pattern, patternArray) {
    const targetIdSequence = pattern.idSequence.join(',');
  
    for (const item of patternArray) {
      const currentIdSequence = item.idSequence.join(',');
      if (currentIdSequence === targetIdSequence) {
        return item;
      }
    }
  
    return null;
  }
  
  // Ejemplo de uso
  const patternArray =[
    {
      sequence: [
        'Guillermo', 'tiene',     '37',
        'años',      '.',         '¿',
        'Cuál',      'es',        'la',
        'edad',      'de',        'Guillermo',
        '?',         'La',        'edad',
        'de',        'Guillermo', 'es',
        '37',        'años',      '.'
      ],
      dictionary: {
        '37': 2,
        Guillermo: 0,
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
      },
      idSequence: [
        0,  1, 2,  3, 4,  5,  6,
        7,  8, 9, 10, 0, 12, 13,
        9, 10, 0,  7, 2,  3,  4
      ]
    },
    {
      sequence: [
        'El',   'coche', 'es',
        'azul', '.',     '¿',
        'De',   'qué',   'color',
        'es',   'el',    'coche',
        '?',    'El',    'coche',
        'es',   'de',    'color',
        'azul', '.'
      ],
      dictionary: {
        El: 0,
        coche: 1,
        es: 2,
        azul: 3,
        '.': 4,
        '¿': 5,
        De: 6,
        'qué': 7,
        color: 8,
        el: 10,
        '?': 12,
        de: 16
      },
      idSequence: [
        0, 1,  2,  3, 4,  5, 6,
        7, 8,  2, 10, 1, 12, 0,
        1, 2, 16,  8, 3,  4
      ]
    },
    { sequence: [], dictionary: {}, idSequence: [] }
  ]
  
  const pattern = {
    sequence: [
      'Luis', 'tiene', '31',
      'años', '.',     '¿',
      'Cuál', 'es',    'la',
      'edad', 'de',    'Luis',
      '?',    'La',    'edad',
      'de',   'Luis',  'es',
      '31',   'años'
    ],
    dictionary: {
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
    },
    idSequence: [
        0,  1, 2,  3, 4,  5,  6,
        7,  8, 9, 10, 0, 12, 13,
        9, 10, 0,  7, 2,  3,  4
      ]
  };
  
  const foundPattern = findPattern(pattern, patternArray);
  console.log(foundPattern);
  