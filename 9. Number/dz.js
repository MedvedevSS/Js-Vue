
// 1.	Получить число pi из Math и округлить его до 2-х знаков после точки

let value;

value = Math.PI;
value = parseFloat(value.toFixed(2));
console.log(value, typeof value);

// 2.	Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const arr = [15, 11, 16, 12, 51, 12, 13, 51];

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

// 3.	Работа с Math.random:
// a)	Получить случайное число и округлить его до двух цифр после запятой
// b)	Получить случайное целое число от 0 до X. X - любое произвольное число.

// a)

value = Math.random().toFixed(2);
console.log(value);

// b)
value = Math.random().toFixed(2) * 10;
console.log(value);

// 4.	Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

value = 0.6 + 0.7;
const sum = parseFloat(value.toFixed(1));
console.log(sum);

// 5.	Получить число из строки ‘100$’

const str = '100$';
const num = parseInt(str);
console.log(num, typeof num);



