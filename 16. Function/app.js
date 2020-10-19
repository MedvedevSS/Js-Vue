// Returns an index of the specified element in array or -1 if element is not found
/**
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */


// function getIndex(arr, value) {
//   return arr.indexOf(value);
// }
//
// console.log(getIndex(['Ace', 10, true], 10));
// let arr = [1, 2, 'Hello', 'Javascript', 30, {name: 'Sergey'}, 'Hello'];// длина массиа 2, индекс последнего элемента 1
// let value = arr.indexOf('Hello', -3);
// console.log(value);

// console.log(getIndex(['Array', 'Number', 'string'], 'Date'));
// console.log(getIndex([0, 1, 2, 3, 4, 5], 5));

/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */

// function getNegativeNum(len) {
// 	const newArr = [];
//
// 	for (let i = 0; newArr.length < len; i++) {
// 		if (i % 2 !==0) {
// 			newArr.push(i);
// 		}
// 	}
// 	return newArr;
// }
// console.log(newArr);
// getNegativeNum(2);
// getNegativeNum(5);

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
// function getStringLength(value) {
// 	if (typeof(value) !== 'string') {
// 		return;
// 	}
// 	return value.length;
// }
// console.log(getStringLength('aaaaa'));
// console.log(getStringLength('b'));
// console.log(getStringLength(''));

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
// function getStringFromTemplate(firstName = 'Максим', lastName = 'Иванов') {
// 	return `Hello ${firstName} ${lastName}`;
// }
// console.log(getStringFromTemplate('John','Doe'));
// console.log(getStringFromTemplate('Chuck','Norris'));
// console.log(getStringFromTemplate());

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */

// let str = 'Hello, John Doe!';
// let result = str.replace('Hello,', '');
// console.log(result);
// str = 'Hello, Chuck Norris!';
// result = str.replace('Hello,', '');
// console.log(result);

// /**
//  * Returns a first char of the given string.
//  *
//  * @param {string} value
//  * @return {string}
//  *
//  * @example
//  *   'John Doe'  => 'J'
//  *   'cat'       => 'c'
//  */
// function getFirstChar(value) {
// 	return value.charAt(0);
// }
// console.log(getFirstChar('John Doe'));
// console.log(getFirstChar('cat'));

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */

// let str = '  Abracadabra';
// let newStr = str.trim();
// console.log(newStr);
// str = 'cat';
// newStr = str.trim();
// console.log(newStr);
// str = '\tHello, World!';
// newStr = str.trimLeft()
// console.log(newStr);

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
// function repeatString(value, count) {
// 	return repStr = value.repeat(count);
// }
// console.log(repeatString('A', 5));
// console.log(repeatString('cat', 3));

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
// function removeFirstOccurrences(str, value) {
// 	return str.replace(value, '');
// }
// console.log(removeFirstOccurrences('To be or not to be not', /^[not]/));

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
// function unbracketTag(str) {
// 	return str.slice(1, -1);
// }
//
// console.log(unbracketTag('<div>'));
// console.log(unbracketTag('<span>'));
// console.log(unbracketTag('<a>'));

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
// function encodeToRot13(str) {
// 	const origin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// 	const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
// 	let result = '';
// 	for (let i = 0; i < str.length; i++) {
// 		let indexOrigin = origin.indexOf(str[i]); // 33
// 		if (indexOrigin !== -1) {
// 			result += cipher[indexOrigin];
// 		} else {
// 			result += str[i];
// 		}
// 	}
// 	return result;
// }
//
// console.log(encodeToRot13('hello'));
// console.log(encodeToRot13('Why did the chicken cross the road?'));
// console.log(encodeToRot13('Gb trg gb gur bgure fvqr!'));

// function testCase(a) {
// 	let x = a;
//
// 	switch (a) {
// 		case (0):
// 			x = 'Ноль'
// 			break;
// 		case (1):
// 			x = 'Один'
// 			break;
// 		case (2):
// 			x = 'Два'
// 			break;
// 		case (3):
// 			x = 'Три'
// 			break;
// 		case (4):
// 			x = 'Четыре'
// 			break;
// 		case (5):
// 			x = 'Пять'
// 			break;
// 		case (6):
// 			x = 'Шесть'
// 			break;
// 		case (7):
// 			x = 'Семь'
// 			break;
// 		case (8):
// 			x = 'Восемь'
// 			break;
// 		case (9):
// 			x = 'Девять'
// 			break;
// 	}
// 	return console.log(x);
// }
// testCase(Math.floor(Math.random() * 10));

// function testCase(a) {
// 	let x;
// 	const str = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//
// 	let random = Math.floor(Math.random() * a.length);
// 	str[random];
// 	return str[random];
// }
//
// // testCase(['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять']);
// console.log(testCase([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 > 1);
if (0) {
	console.log('Ложь');
} else if (' ') {
	console.log('Истина');
}
