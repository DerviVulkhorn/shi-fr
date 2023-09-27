
export function tableTranspositionCipher(key, word){
  // Проверка наличия ключа и слова
  if (!key || !word) {
    return "Введите ключ и слово";
  }

  // Проверка валидности ключа (число от 1 до длины слова)
  if (isNaN(key) || key < 1 || key > word.length) {
    return "Неверный ключ";
  }

  // Создание таблицы для шифрования
  const table = [];
  for (let i = 0; i < key; i++) {
    table.push([]);
  }

  // Заполнение таблицы по столбцам
  let rowIndex = 0;
  for (let i = 0; i < word.length; i++) {
    table[rowIndex].push(word[i]);
    rowIndex = (rowIndex + 1) % key;
  }

  // Считывание зашифрованного слова по строкам таблицы
  let result = "";
  for (let i = 0; i < key; i++) {
    for (let j = 0; j < table[i].length; j++) {
      result += table[i][j];
    }
  }
  return result
}
  

export function tableTranspositionCipherDecrypt(key, text) {
   // Проверка наличия ключа и слова
   if (!key || !text) {
    return "Введите ключ и слово";
  }

  // Проверка валидности ключа (число от 1 до длины слова)
  if (isNaN(key) || key < 1 || key > text.length) {
    return "Неверный ключ";
  }

  var result = [];
  var lengthText = text.length;
  var whole = Math.floor(lengthText / key);
  var reminder = lengthText - (whole * key);
  var digits = [];
  for (var i = 0; i < reminder; i++) {
    digits.push(1);
  }
  for (var i = reminder; i < key; i++) {
    digits.push(0);
  }
  var begin = 0;
  for (var i = 0; i < digits.length; i++) {
    var number = digits[i];
    var end = begin + whole + number;
    var substring = text.slice(begin, end);
    begin += whole + number;
    result.push(substring);
  }
  var decipher = "";
  var n = result[0].length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < result.length; j++) {
      if (i < result[j].length) {
        decipher += result[j][i];
      }
    }
  }
  return decipher;
}
  