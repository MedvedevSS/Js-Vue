
// const persons = [
// 	{ name: 'Peter', age: 16 },
// 	{ name: 'Mark', age: 18 },
// 	{ name: 'John', age: 27 },
// 	{ name: 'Jane', age: 14 },
// 	{ name: 'Tony', age: 24},
// ];
// const fullAge = [];
// for(let i = 0; i < persons.length; i++) {
// 	if(persons[i].age >= 18) {
// 		fullAge.push(persons[i]);
// 	}
// }
// console.log(fullAge);
//
// const persons = [
// 	{ name: 'Peter', age: 16 },
// 	{ name: 'Mark', age: 18 },
// 	{ name: 'John', age: 27 },
// 	{ name: 'Jane', age: 14 },
// 	{ name: 'Tony', age: 24},
// ];
// const fullAge = persons.filter(person => person.age >= 18);
// console.log(fullAge);

let numbers = [1,2,3,4,5,6];
function double(x){
	return x*2;
}
let doubleNumbers = numbers.map(double);
console.log(doubleNumbers);
