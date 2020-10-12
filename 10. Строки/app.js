const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denus';

let value;

value = firstName + lastName;// Получаем DenisMescherykov без пробелов
console.log(value);

value = firstName + ' ' + lastName;// Получаем Denis Mescherykov с пробелом
console.log(value);

value += ' I am ' + age;// Добавляем к к текущей строке I am 30 и получаем Denis Mescherykov I am 30
console.log(value);

value = firstName.length;/* Это свойство возвращает длинну строки. Покажет 5 символов в строке, а
индексов 4 потомучто с нуля отсчет
*/
value = firstName[2];// Получение конкретного индекса в строке. Получим n
value = firstName[4];/* Получение в ручную последнего индекса, т.е надо самому подсчиать последний
индекс. Получим s
*/
console.log(value);

value = lastName[lastName.length - 1];// Получение последнего индекса в строке без подсчета.
// Получим v
console.log(value);

value = firstName.toLowerCase();// Делаем строку в нижнем регистре
value = firstName.toUpperCase();// Делаем строку в верхнем регистре
console.log(value, firstName);// value - DENIS , firstName - Denis так и останется как было

//                                    Concat
value = firstName.concat(' ', lastName);// Получим тоже самое, если бы записали
// value = firstName + ' ' + laastName;

//                                   indexOf
value = firstName.indexOf('n');// Вернет индекс первого вхождения строки. Индекс будет 2

value = str.indexOf('n');// Индекс 9

value = str.indexOf('n', 10);// Будет искать n после 10 индекса. Индекс будет 19

value = str.indexOf('my');// Будет искать строку my. Найдет что с 6 индекса my
console.log(value);

value = str.indexOf('!');// Если не найдет вернет число -1

//                                   includes
value = str.includes('my');// true. Если найдет то trye, если нет то false. Отвечает в Boolean
// значение. Здесь true потому есть my в строке
console.log(value);

value = str.includes('!');// false. Потому что ! нету в строке

value= str.includes('DENIS');// false. Чувствитлен к регистру потому что есть Denis, но
// нету DENIS

//                                         Slice
value =str.slice(0, 5);// Hello . 0 - скакого индекса вырезать, 5 - до какого индекса вырезать из
// строки . value = 'Hello' в строке останется только то что вырезали

value = str.slice(0);// Вернет все строку
value = str.slice();// Вернет все строку

value = str.slice(0, -3);// Вернет Hello my name is De. Начнет с начала строки, а с конца уберет 3
// индекса

//                                       Replace
value = str.replace('Denis', 'Den');// Первое значение что ищет в строке, второе на что заменить это
