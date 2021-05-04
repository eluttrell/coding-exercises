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
  {
    name: 'g',
    id: 11,
    managerId: 10,
  },
  {
    name: 'h',
    id: 12,
    managerId: 11,
  },
  {
    name: 'i',
    id: 13,
    managerId: 12,
  },
  {
    name: 'j',
    id: 14,
    managerId: 13,
  },
  {
    name: 'k',
    id: 15,
    managerId: 14,
  },
  {
    name: 'l',
    id: 16,
    managerId: 14,
  },
];

function employeeReportsCount(arr) {
  let managers = {};
  arr.forEach((employee) => {
    crawlHierarchy(employee, arr, managers)
  });
  return managers;
}

function crawlHierarchy(employee, arr, managers) {
  if (!managers[employee.name]) managers[employee.name] = 0;
  if (employee.managerId) {
    const manager = arr.find(el => el.id === employee.managerId);
    if (!managers[manager.name]) managers[manager.name] = 0;
    managers[manager.name]++;
    return crawlHierarchy(manager, arr, managers);
  } 
  return;
}

console.log(employeeReportsCount(employees));
