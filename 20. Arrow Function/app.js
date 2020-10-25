
Функции-стрелки (стрелочные функции, функции-ракеты) - новый синтаксис для создания функциональных выражений.

	Особенности arrow function:
1) более лаконичный синтаксис;
2) отсутствие псевдомассива аргументов arguments;
3) лексическое определение this;
4) не могут использоваться в качестве конструкторов (с оператором new); это мы не проходили
5) не могут использоваться для создания генераторов. это мы не проходили

Arrow function всегда создается с помощью function expression и не имеет имени (анонимная). Для создания arrow functions не используется ключевое слово function и вместо этого используется fat arrow (жирная стрелка) =>

Если тело функции содержит однострочное выражение, то фигурные скобки можно опустить, и слово return в данном случае тоже опускается:

Если функция принимает один аргумент, то круглые скобки вокруг аргумента можно не использовать:

Если стрелочная функция используется без фигурных скобок и слова return, и при этом мы хотим вернуть объект, то объект нужно заключить в круглые скобки:

	Для стрелочных функций не существует “собственного” this, то есть они используют this “выше” уровнем - тот this, который определяется в момент создания актуального окружения, в котором находится стрелочная функция.