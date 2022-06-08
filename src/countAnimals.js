const data = require('../data/zoo_data');

const { species } = data;

const countAllAnimals = () => {
  const allAnimalsList = {};
  species.forEach((eachSpecies) => {
    const nameOfeachSpecies = eachSpecies.name;
    const quantitySpecies = eachSpecies.residents.length;
    allAnimalsList[nameOfeachSpecies] = quantitySpecies;
  });
  return allAnimalsList;
};

const countOneAnimalUnissex = (animal) => {
  const wantedSpecies = species.find((eachSpecies) => eachSpecies.name === animal.specie);
  return wantedSpecies.residents.length;
};

const countOneAnimalSex = (animal) => {
  const wantedSpecies = species.find((eachSpecies) => eachSpecies.name === animal.specie);
  const wantedSpeciesGender = wantedSpecies.residents.filter((eachResident) => eachResident.sex
  === animal.sex);
  return wantedSpeciesGender.length;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return countAllAnimals();
  }
  if (animal.sex === undefined) {
    return countOneAnimalUnissex(animal);
  }
  if (animal.sex !== undefined) {
    return countOneAnimalSex(animal);
  }
}

module.exports = countAnimals;
