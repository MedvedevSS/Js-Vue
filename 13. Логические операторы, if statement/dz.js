
// 1.	Чему равно а, почему?
// a

// let a = 0 || 'string';//string
// console.log(a);
// // b
// a = 1 && 'string';//string
// console.log(a);
// // c
// a = null || 25;//25
// console.log(a);
// // d
// a = null && 25;// null
// console.log(a);
// // e
// a = null || 0 || 35;// 35
// console.log(a);
// // f
// a = null && 0 && 35;// null
// console.log(a);
//
// // 2
// // a
// a = 12 + 14 + '12';// 2612
// console.log(a);
// // b
// a = 3 + 2 -"1";// 4
// console.log(a);
// // c
// a = '3' + 2 - 1;// 31
// console.log(a);
// // d
// a = true + 2;// 3
// console.log(a);
// // e
// a = +'10' + 1;// 11
// console.log(a);
// // f
// a = undefined + 2;// NaN ?
// console.log(a);
// // g
// a = null + 5;//5
// console.log(a);
// // h
// a = true + undefined;// NaN
// console.log(a);
//
// // 3
// let value = 'name';
//
// if (value === 'hidden') {
//   value = 'visible';
// } else {
//   value = 'hidden';
// }
// console.log(value);
//
// // 4
// let ch = -1;
//
// if (ch == 0) {
//   console.log(ch = 1);
// } else if (ch < 0) {
//   console.log(ch = 'less then zero');
// } else {
//   console.log(ch *= 10);
// }
// 5
// let car = {
//   name: 'Lexus',
//   age: 10,
//   create: 2008,
//   needRepair: false
// };
//
// let carAge = car.age;
//
// if (carAge > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// }
// console.log(car);

// 6

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
};

let Price = parseFloat(item.price);
let Discount = parseFloat(item.discount);

if (Price && !Number.isNaN(Price) && Discount && !Number.isNaN(Discount)) {
  item.priceWithDiscount = Price - (Price / 100 * Discount);
  console.log(item.priceWithDiscount);
} else  {
  console.log(item.price);
}


// 7
// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };
//
// let min = 10;
// let max = 20;
// let $price = parseInt(price);
//
// console.log($price);
//
// if (parseInt('10$') >= min || parseInt('10$') <= max) {
//   console.log(product.name);
// } else {
//   console.log('none');
// }

console.log(Boolean(-100));












