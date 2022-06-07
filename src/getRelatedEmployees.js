const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const wantedManagers = employees.some((manager) => manager.managers.includes(id));
  return wantedManagers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const wantedEmployees = employees.filter((manager) => manager.managers.includes(managerId));
    const wantedEmplyeesOrganized = wantedEmployees.map((arrayOfEmployees) =>
      `${arrayOfEmployees.firstName} ${arrayOfEmployees.lastName}`);
    return wantedEmplyeesOrganized;
  } catch (error) {
    return error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
