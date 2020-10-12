
let value;

// Number to string
value = String(10);// 10 string
value = String(10+40);// 50 string
value = (40).toString();// 40 string

// Boolean to string
value = String(false);// false string
value = String(true);// true string

// Array to string
value = String([1, 2, 3,]);// 1, 2, 3 string

// Object to string
value = String({name: 'Denis'});// [object object] string

value = 30 + '';// 30 string
value = 30 + '' + 30;// 3030 string
value = 30 + '' + undefined;// 30undefined string

value = 30 - '';// 30 number
value = 30 - 'asd';// NaN number
value = 30 - '5';// 25 number
value = 30 * '5';// 150 number

value = true + 10;// 11 number. true преобразуется в 1
value = false + 10;// 10 number. false преобразуется в 0
value = null + 10;// 10 number. null преобразуется в 0
value = false + undefined;// Nan number. Потому что в матю операциях с undefined, всегда будет NaN

// String to number
value = Number('23');// 23 number
value = Number(true);// 1 number
value = Number(false);// 0 number
value = Number(null);// 0 number
value = Number('false');// NaN number
value = Number('true');// NaN number

value = parseInt('200abc');// 200 number
value = parseInt('asd200dfc');// NaN number

value = parseFloat('200.12abc');// 200.12 number. Для чисел с запятой
value = parseFloat('asd200.12asd');// NaN number

// Boolean
value = Boolean('hello');// true boolean
value = Boolean('');// false boolean
value = Boolean(' ');// true boolean
value = Boolean(100);// true boolean
value = Boolean(-100);// true boolean

value = Boolean(0);// false boolean
value = Boolean(undefined);// false boolean
value = Boolean(null);// false boolean
value = Boolean([]);// true boolean
value = Boolean({});//true boolean



console.log(value);
console.log(typeof value);
