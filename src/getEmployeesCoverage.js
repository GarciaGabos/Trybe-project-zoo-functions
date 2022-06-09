const data = require('../data/zoo_data');

const { species, employees } = data;

function buildResult(worker) {
  const speciesFiltered = species.filter((s) => worker.responsibleFor.includes(s.id));
  return {
    id: worker.id,
    fullName: `${worker.firstName} ${worker.lastName}`,
    species: speciesFiltered.map((s) => s.name),
    locations: speciesFiltered.map((s) => s.location),
  };
}
function getEmployeesCoverage(employee) {
  if (employee === undefined) {
    return employees.map((worker) => buildResult(worker));
  }
  const employeeWanted = employees.find((e) => e.id === employee.id
  || e.firstName === employee.name || e.lastName === employee.name);

  if (employeeWanted === undefined) {
    throw new Error('Informações inválidas');
  }
  return buildResult(employeeWanted);
}

module.exports = getEmployeesCoverage;
