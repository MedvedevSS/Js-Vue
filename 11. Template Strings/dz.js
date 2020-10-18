'use strict';


let string = 'some test string';
let lenght = string.length;

console.log(value);

// 1. получить первую и последнюю буквы строки
let firstSymbol = string[0];
let lastSymbol = string[string.length - 1];
console.log(firstSymbol, lastSymbol);

// 2. Сделать первую и последную буквы в верхем регистре
console.log(firstSymbol.toUpperCase(), lastSymbol.toUpperCase());

// 3. найти положение слова 'string' в строке
console.log(string.indexOf('string')); // вернет индекс когда встречается этот элемент

// 4. Найти положение второго пробела ("вручную" ничего не считать)
let firstSpacePosition = string.indexOf(' ');
console.log(string.indexOf(' ', firstSpacePosition + 1));

// 5. Получить строку с 5-го символа длинной 4 буквы
// hello55 (2, 4)

let newStr = string.slice(5, 9);
let newStr2 = string.substring(5, 9);
let newStr3 = string.substr(5, 4);
console.log(newStr);
console.log(newStr2);
console.log(newStr3);

// 6. Получить строку с 5-го по 9-й символы
newStr = string.slice(5, 10);
console.log(newStr);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
newStr = string.slice(0, -6);
console.log(newStr);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20, b = 16;
console.log(a + '' + b);
console.log(`${a}${b}`);

let str = '';
str += a;
str += b;
console.log(str);
