const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const wantedAnimals = species.find((specie) => specie.name === animal);
  // eslint-disable-next-line max-len
  const wantedAge = wantedAnimals.residents.every((individualAnimal) => individualAnimal.age >= age);
  return wantedAge;
}

module.exports = getAnimalsOlderThan;
