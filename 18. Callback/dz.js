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
Подсказка: secondFunc должна быть представлена функцией,которая принимает один аргумент
 (каждый элемент массива) и возвращает результат его обработки
 */
console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler));
console.log(firstFunc([10, 20, 30], handler2));
console.log(
	firstFunc(
		[
			{ age: 45, name: 'Jhon' },
			{ age: 20, name: 'Aaron' },
		],
		handler3
	)
);
console.log(firstFunc(['abc', '123'], handler4));

function firstFunc(arr, callback) {
	let result = 'New value: ';

	for (let value of arr) {
		result += callback(value);
	}
	return result.trim();
}
function handler(item) {
	return item[0].toUpperCase() + item.slice(1); // 'My'; 'Name'; 'I'+'s'; 'T'+'rinity'
}
function handler2(item) {
	return `${item * 10}, `;
}
function handler3(item) {
	return `${item.name} is ${item.age}, `;
}
function handler4(item) {
	return `${item.split('').reverse().join('')}, `;
}



// Упражнение 2:
// Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте, что передан массив), вторым аргументом callback (обязательно проверьте, что передана функция). Если передан один из аргументов не удовлетворяет условию, то функция должна вернуть new Error('с произвольным сообщением')
//
// Функция должна возвращать true или false в зависимост от результата вызова callback(проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

console.log(myEvery([4, 12, 6, 7], handlerMyEvery));

function myEvery(arr, cb) {
	if (!Array.isArray(arr) || typeof cb !== 'function') {
		return new Error('произошла ошибка, где то косяк');
	}
	for (let i = 0; i < arr.length; i++) {
		if (!cb(arr[i])) return false;
	}
	return true;
}
function handlerMyEvery(item) {
	return item > 5;
}






