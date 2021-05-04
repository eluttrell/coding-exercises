'use strict';
const employees = [
  {
    name: 'a',
    id: 1,
    managerId: 2,
  },
  {
    name: 'b',
    id: 2,
    managerId: 10,
  },
  {
    name: 'c',
    id: 10,
    managerId: null,
  },
  {
    name: 'd',
    id: 3,
    managerId: 4,
  },
  {
    name: 'e',
    id: 4,
    managerId: 10,
  },
  {
    name: 'f',
    id: 5,
    managerId: 2,
  },
];

function employeeReportsCount(arr) {
  let managers = {};
  arr.forEach((employee) => {
    if (!managers[employee.name]) managers[employee.name] = 0;
    crawlHierarchy(employee, arr, managers)
  });
  return managers;
}

function crawlHierarchy(employee, arr, managers) {
  if (employee.managerId) {
    const manager = arr.find(el => el.id === employee.managerId);
    if (!managers[manager.name]) managers[manager.name] = 0;
    managers[manager.name]++;
    return crawlHierarchy(manager, arr, managers);
  } else {
    return;
  }
}

console.log(employeeReportsCount(employees));
