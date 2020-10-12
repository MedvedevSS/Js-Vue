
console.log(null === undefined); // object undefined -> false
console.log(null == undefined); // true
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
10:09
// 1Строковое преобразование
console.log(String(10)); // '10'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'
console.log(String({})); // objectobject
// 2 Числовое
console.log(Number('10')); // 10
console.log(Number('15$')); // NaN
console.log(+'15$'); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(true)); // 1
// 3. Логическое преобразование
// null, undefined, пустая строка, NaN, 0, '' - false
// все остальное в true