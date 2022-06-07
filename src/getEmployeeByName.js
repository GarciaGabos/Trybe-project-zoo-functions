const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const result = {};
    return result;
  }
  const wantedEmployee = employees.find((eachEmployee) => eachEmployee.firstName === employeeName
  || eachEmployee.lastName === employeeName);
  return wantedEmployee;
}

module.exports = getEmployeeByName;
