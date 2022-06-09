const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const wantedEmployee = employees.find((eachEmployee) => eachEmployee.id === id);
  const wantedSpeciesID = wantedEmployee.responsibleFor[0];
  const wantedSpeciesResidents = species.find((eachSpecies) => eachSpecies.id
  === wantedSpeciesID).residents;
  const oldestAnmial = wantedSpeciesResidents.reduce((acc, animal) =>
    ((acc.age < animal.age) ? animal : acc));
  return Object.values(oldestAnmial);
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

// Encontre a primeira espécie de animal que a pessoa colaboradora é responsável;
// Encontre o animal mais velho daquela espécie;
// Retorne um array com as informações do animal mais velho daquela espécie.
// Passado o id de uma pessoa colaboradora, encontra a primeira espécie de animal
// gerenciado por essa pessoa, e retorna um array com nome, sexo e idade do animal
// mais velho dessa espécie.

module.exports = getOldestFromFirstSpecies;
