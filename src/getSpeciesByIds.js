const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const wantedIds = species.filter((elementArraySpecies) => ids.includes(elementArraySpecies.id));
  return wantedIds;
}

module.exports = getSpeciesByIds;
