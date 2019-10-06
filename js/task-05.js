console.log('Задание 5');

const getAllPropValues = function getAllPropValues(arr, prop) {
  const values = [];


  for (const el of arr) {
    if (el[prop]) { // или if (el.hasOwnProperty(prop))
      values.push(el[prop]);
    }
  }
  return values;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
