function findPatternByKeys(pattern, patternArray) {
    let maxSimilarity = -1;
    let mostSimilarPattern = null;
    let commonKeys;
  
    for (const item of patternArray) {
      const keysPattern = Object.dictionary.keys(pattern);
      const keysItem = Object.dictionary.keys(item);
      
     commonKeys = keysPattern.filter(key => keysItem.includes(key));
      const similarity = commonKeys.length;
  
      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        mostSimilarPattern = item;
      }
    }
    console.log(commonKeys)
    return mostSimilarPattern;
  }
    
    // Ejemplo de uso
    const patternArray =[
      {
        sequence: [
          'Guillermo', ' ',         'tiene', ' ',
          '37',        ' ',         'años',  '.',
          ' ',         '¿',         'Cuál',  ' ',
          'es',        ' ',         'la',    ' ',
          'edad',      ' ',         'de',    ' ',
          'Guillermo', '?',         ' ',     'La',
          ' ',         'edad',      ' ',     'de',
          ' ',         'Guillermo', ' ',     'es',
          ' ',         '37',        ' ',     'años',
          '.'
        ],
        dictionary: {
          '37': 4,
          Guillermo: 0,
          ' ': 1,
          tiene: 2,
          'años': 6,
          '.': 7,
          '¿': 9,
          'Cuál': 10,
          es: 12,
          la: 14,
          edad: 16,
          de: 18,
          '?': 21,
          La: 23
        },
        idSequence: [
           0,  1,  2,  1,  4,  1,  6,  7,  1, 9,
          10,  1, 12,  1, 14,  1, 16,  1, 18, 1,
           0, 21,  1, 23,  1, 16,  1, 18,  1, 0,
           1, 12,  1,  4,  1,  6,  7
        ]
      },
      {
        sequence: [
          '\r\nEl', ' ',     'coche', ' ',
          'es',     ' ',     'azul',  '.',
          ' ',      '¿',     'De',    ' ',
          'qué',    ' ',     'color', ' ',
          'es',     ' ',     'el',    ' ',
          'coche',  '?',     ' ',     'El',
          ' ',      'coche', ' ',     'es',
          ' ',      'de',    ' ',     'color',
          ' ',      'azul',  '.'
        ],
        dictionary: {
          '\r\nEl': 0,
          ' ': 1,
          coche: 2,
          es: 4,
          azul: 6,
          '.': 7,
          '¿': 9,
          De: 10,
          'qué': 12,
          color: 14,
          el: 18,
          '?': 21,
          El: 23,
          de: 29
        },
        idSequence: [
           0,  1,  2,  1,  4,  1, 6, 7, 1,
           9, 10,  1, 12,  1, 14, 1, 4, 1,
          18,  1,  2, 21,  1, 23, 1, 2, 1,
           4,  1, 29,  1, 14,  1, 6, 7
        ]
      },
      {
        sequence: [
          '\r\nGuillermo', ' ',         'tiene',
          ' ',             '4',         ' ',
          'gatos',         '.',         ' ',
          '¿',             'Cuántos',   ' ',
          'gatos',         ' ',         'tiene',
          ' ',             'Guillermo', '?',
          '.',             ' ',         'Guillermo',
          ' ',             'tiene',     ' ',
          '4',             ' ',         'gatos',
          '.'
        ],
        dictionary: {
          '4': 4,
          '\r\nGuillermo': 0,
          ' ': 1,
          tiene: 2,
          gatos: 6,
          '.': 7,
          '¿': 9,
          'Cuántos': 10,
          Guillermo: 16,
          '?': 17
        },
        idSequence: [
           0,  1,  2, 1,  4, 1, 6, 7,
           1,  9, 10, 1,  6, 1, 2, 1,
          16, 17,  7, 1, 16, 1, 2, 1,
           4,  1,  6, 7
        ]
      },
      { sequence: [], dictionary: {}, idSequence: [] }
    ]
    
    const pattern = {
      sequence: [
        'Luis',          ' ',
        'tiene',         ' ',
        '2',             ' ',
        'videoconsolas', '.',
        ' ',             '¿',
        'Cuantas',       ' ',
        'videoconsolas', ' ',
        'tiene',         ' ',
        'Luis',          '?'
      ],
      dictionary: {
        '2': 4,
        Luis: 0,
        ' ': 1,
        tiene: 2,
        videoconsolas: 6,
        '.': 7,
        '¿': 9,
        Cuantas: 10,
        '?': 17
      },
      idSequence: [
        0, 1, 2,  1, 4, 1, 6,
        7, 1, 9, 10, 1, 6, 1,
        2, 1, 0, 17
      ]
    }
    
    const foundPattern = findPatternByKeys(pattern, patternArray);
    console.log(foundPattern);
    
    module.exports = findPatternByKeys;