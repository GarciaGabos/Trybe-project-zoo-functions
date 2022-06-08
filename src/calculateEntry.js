const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsByAge = {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length };
  return entrantsByAge;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const quantityEntrants = countEntrants(entrants);
  const sumOfentries = (quantityEntrants.child * 20.99) + (quantityEntrants.adult * 49.99)
  + (quantityEntrants.senior * 24.99);
  return sumOfentries;
}

module.exports = { calculateEntry, countEntrants };

// child: são pessoas menores de 18 anos;
// adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;
// senior: são pessoas com idade maior ou igual a 50 anos.

// Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de countEntrants e calculateEntry.

// As duas funções recebem um array no seguinte formato:

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// console.log(countEntrants(entrants));
