// 1.	Создать объект с полем product, равным ‘iphone’

const name = {
  product: 'iphone'
};
console.log(name);

// 2.	Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

name.price = 1000;
name.currency = 'dollar';
console.log(name);

// 3.	Добавить поле details, которое будет содержать объект с полями model и color

name.details = {};
name.details.model = '';
name.details.color = '';
console.log(name);
