
/*
Упражнение 1
Создать функции:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элменет массива (для каждого вызова свой callback)

Первая функция возвращает строку 'New value:' и результат обработки:

firstFunc(['my', 'name', 'is', 'Trinity'], hanlder) -> 'New value: MyNameIsTrinity'
firstFunc([10, 20, 30], handler2) -> 'New value: 100, 200, 300'
firstFunc({age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}, handler3) -> 'New value: Jhon is 45, Aaron is 20'
firstFunc(['abc', '123'], handler4) -> 'New value: cba, 321' // строки инвертируются

Имена функций должны быть как в примере
Подсказка: secondFunc должна быть представлена функцией,которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

function firstFunc(arr, callback) {
	result = 'New Value';
}