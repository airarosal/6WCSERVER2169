const calc = require('./calculation.js');

const ratePerHour = 500;
const hoursPerDay = 6;
const daysPerWeek = 7;

const totalHours = calc.multiply(hoursPerDay, daysPerWeek);
const grossIncome = calc.multiply(ratePerHour, totalHours);

const tax = calc.multiply(grossIncome, 0.10);
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;

const totalDeductions = calc.add(
    calc.add(tax, sss),
    calc.add(pagIbig, philHealth)
);

const netSalary = calc.subtract(grossIncome, totalDeductions);

console.log('The gross income is ', grossIncome);
console.log('Tax: ', tax);
console.log('SSS: ', sss);
console.log('Pag-Ibig fund: ', pagIbig);
console.log('PhilHealth: ', philHealth);
console.log('Total deductions: ', totalDeductions);
console.log('The net salary is ', netSalary);
