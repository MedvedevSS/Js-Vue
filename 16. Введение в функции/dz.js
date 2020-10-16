// Упражнение 1:
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение.
//
// Пример вызова:
// multiply(1,2,3) => результат 6 // 1*2*3
// Если нет ни одного аргумента, вернуть ноль: multiply(0) // 0

function multiply() {
  if (arguments.length === 0) return 0;

  let res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
}

multiply(2, 4, 6, 8);

// Упражнение 2:
// Создать функцию, которая принимает строку и возвращает строку-перевертыш
//
// Примеры вызовов и результаты
// reverseString('test') // 'tset'
// reverseString('') // ''
// reverseString(null) // llun
// reverseString(undefined) // denifednu

function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--)
    newStr += str[i];
  return newStr;
}

let String = reverseString('test');
console.log(String);
String = reverseString('');
console.log(String);
String = reverseString('null');
console.log(String);
String = reverseString('undefined');
console.log(String);

// Упражнение 3:
// Создать функцию, которая в качестве аргумента может приять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
//   getCodeStringFromText('hello') // '104 101 108 108 1111'
//
// подсказка: в решение задачи вам помогут методы charCodeAt и trim

function getCodeStringFromText(str) {
  let newStr1 = '';

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      newStr1 += str.charCodeAt(i);
    } else {
      newStr1 += str.charCodeAt(i) + ' ';
    }
  }
  return console.log(newStr1);
}

getCodeStringFromText('hello');

// Упражнение 4:
// Создать функцию угадай число.
//
// Она принимает число от 1-10 (обязательно проверить что число не больше 10 и меньше 0)
// Если число не соответствует условию, то верните ошибку return new Error('Please provide number in range 0 - 10').
// Если передано не число то верните ошибку return new Error('Please provide a valid number')
//
// Далее функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали, то возвращает строку 'You win', если нет, то строку 'You are lose, your number is 8, the random number is 5'. Числа в строке - пример, у вас будут свои при выводе
//
// Если передано число в виде строки, оно должно быть преобразованно к числу.

