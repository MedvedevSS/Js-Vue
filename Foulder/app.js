
/*********************************************************************************************************
 **                                                                                                      **
 **   Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.   **
 **                                                                                                      **
 *********************************************************************************************************/


// let arr1 = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

/*********************************************************************************************************
 **                                                                                                      **
 **  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. **
 **  Запишите ее в переменную result.                                                                    **
 **                                                                                                      **
 *********************************************************************************************************/

// let arr2 = [1, 2, 3, 4, 5];
// let res1 = 0;
// for (let i = 0; i < arr2.length; i++) {
//   res1 += arr2[i];
//   console.log(res1);
// }

/*********************************************************************************************************
 **                                                                                                      **
 **  Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.            **
 **  var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}.                                      **
 **                                                                                                      **
 *********************************************************************************************************/

// let obj1 = {
//   green: 'зеленый',
//   red: 'красный',
//   blue: 'голубой'
// };
// for(let key in obj1) {
//   console.log(key, obj1[key]);
// }

/*********************************************************************************************************
 **                                                                                                      **
 **  Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in  **
 **  выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.                           **
 **                                                                                                      **
 *********************************************************************************************************/

// let obj2 = {
//   'Коля': '200',
//   'Вася': '300',
//   'Петя': '400'
// };
//
//
// for (let key in obj2) {
//   console.log(`${key} - зарплата ${parseFloat(obj2[key])} долларов`);
// }

/*********************************************************************************************************
 **                                                                                                      **
 **  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на           **
 **  экран столбец тех элементов массива, которые больше 3-х, но меньше 10.                              **
 **                                                                                                      **
 *********************************************************************************************************/

// let arr3 = [2, 5, 9, 15, 0, 4];
//
// for (let i = 0; i < arr3.length; i++) {
//
//   if (arr3[i] > 3 && 10 > arr3[i]) {
//     console.log(arr3[i]);
//   }
// }

/*********************************************************************************************************
 **                                                                                                      **
 **  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных **
 **  элементов массива. Цикл while                                                                       **
 **                                                                                                      **
 *********************************************************************************************************/

// let arr4 = [-100, -20, 20, 40];
// let sum = 0;
// let i = 0;
//
// while (i < arr4.length) {
//   if (arr4[i] > 0){
//     sum += arr4[i];
//   }
//   i++;
// }
// console.log(sum);
/*********************************************************************************************************
 **                                                                                                      **
 ** Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла do... while и оператора            **
 ** if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' **
 ** и выйдите ** из цикла. Если нет - ничего делать не надо.                                             **
 **                                                                                                      **
 *********************************************************************************************************/

// let arr5 = [1, 2, 5, 9, 4, 13, 4, 10];
// let j = 0;
// do {
//   if (arr5[j] === 4){
//     console.log('Есть!');
//     break;
//   }
//   j++;
// } while (j < arr5.length);

const people = [
	{name: 'Vladilen', budget: 4200},
	{name: 'Elena', budget: 3500},
	{name: 'Victoria', budget: 1700}
	]
// const index = people.findIndex(function (person){
// 	return person.budget > 3200
// })
// const person = people.find(function (person) {
// return person.budget === 3500
// })

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
​
// function isString(value) {
//   // if (typeof value === 'string') return true;
//   // else return false;
//
//   return typeof value === 'string';
// }
//
// console.log(isString('undefined'));
​
/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
// function getRectangleArea(width, height) {
//   // let result = width * height;
//   // return result;
//
//   return width * height;
// }
//
// console.log(getRectangleArea(5, 10));
// console.log(getRectangleArea(5, 5));
​
/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
​
// function getCicleCircumference(radius) {
//   // let circumference = 2 * Math.PI * radius;
//   // return circumference;
//
//   return 2 * Math.PI * radius;
// }
//
// console.log(getCicleCircumference(5));
// console.log(getCicleCircumference(3.14));
// console.log(getCicleCircumference(0));
​
/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
// function getAverage(value1, value2) {
//   return (value1 + value2) / 2;
// }
//
// console.log(getAverage(5, 5));
// console.log(getAverage(10, 0));
// console.log(getAverage(-3, 3));
​
/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
// function getDistanceBetweenPoints(x1, y1, x2, y2) {
//   const differenceX = x1 - x2;
//   const differenceY = y1 - y2;
//
//   const distance = Math.sqrt(
//     Math.pow(differenceX, 2) + Math.pow(differenceY, 2)
//   );
//   return Math.abs(distance);
//
//   // return Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
// }
//
// console.log(getDistanceBetweenPoints(0, 0, 0, 1));
// console.log(getDistanceBetweenPoints(0, 0, 1, 0));
// console.log(getDistanceBetweenPoints(-5, 0, 10, -10));
​
/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x  + (-10) = 0    => 2
 *   1 * x + 8 = 0       => -8
 *   5 * x + 0 = 0         => 0
 */
// function getLinearEquationRoot(a, b) {
//   // const x = -b / a;
//   // return x;
//
//   return b === 0 ? b / a : -b / a;
// }
//
// console.log(getLinearEquationRoot(5, -10));
// console.log(getLinearEquationRoot(1, 8));
// console.log(getLinearEquationRoot(5, 0));
​
/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
// function getLastDigit(value) {
//   if (!Number.isInteger(value)) return 0;
//
//   return value % 10;
// }
//
// console.log(getLastDigit(100));
// console.log(getLastDigit(37));
// console.log(getLastDigit(5));
// console.log(getLastDigit(0));
​
/**
 * Returns the array of uppercase strings from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
 *    => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
// function getUpperCaseStrings(arr) {
//   const newArr = [];
//
//   for (let item of arr) {
//     newArr.push(item.toUpperCase());
//   }
//
//   return newArr;
// }
//
// console.log(
//   getUpperCaseStrings([
//     'permanent-internship',
//     'glutinous-shriek',
//     'multiplicative-elevation',
//   ])
// );
// console.log(getUpperCaseStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g']));
​
/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
// function getStringsLength(arr) {
//   const newArr = [];
//
//   for (let item of arr) {
//     newArr.push(item.length);
//   }
//
//   return newArr;
// }
//
// console.log(getStringsLength(['', 'a', 'bc', 'def', 'ghij']));
// console.log(getStringsLength(['angular', 'react', 'ember']));
​
/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
// function insertItem(arr, item, index) {
//   if (typeof index === 'number') {
//     arr.splice(index, 0, item);
//   } else {
//     arr.splice(0, 0, index);
//   }
//
//   return arr;
// }
//
// console.log(insertItem([1, 3, 4, 5], 2, 1));
// console.log(insertItem([1, 'b', 'c'], 0, 'x'));
​
/**
 * Returns the n first items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2 => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
// function getHead(arr, n) {
//   // arr.slice(0, 10) // [0], [1], ... [9]
//   return arr.slice(0, n);
// }
//
// console.log(getHead([ 1, 3, 4, 5 ], 2));
// console.log(getHead(['a', 'b', 'c', 'd'], 3));
​
/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
// function toCsvText(arr) {
//   let result = '';
//
//   for (let item of arr) {
//     const str = `${item.join(',')}\n`;
//     result += str;
//   }
//
//   return result;
// }
//
// console.log(
//   toCsvText([
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
// );
​
/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
// function toArrayOfSquares(arr) {
//   const result = [];
//
//   for (let item of arr) {
//     result.push(item ** 2);
//   }
//
//   return result;
// }
//
// console.log(toArrayOfSquares([0, 1, 2, 3, 4, 5]));
// console.log(toArrayOfSquares([10, 100, -1]));