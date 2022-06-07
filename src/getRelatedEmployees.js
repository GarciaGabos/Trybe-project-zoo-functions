const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const wantedManagers = employees.some((manager) => manager.managers.includes(id));
  return wantedManagers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
