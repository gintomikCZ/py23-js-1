// funkce

// function sum (a, b) {
//   let result = a + b
//   console.log(result)
// }

// console.log(result)

// const sum = function (a, b) {
//   let result = a + b
//   console.log(result)
// }

// sum(6, 8) // 14

const sum = function (a, b) {
  return a + b
  // kód tady už se neprovede
}

let result = sum (2, 8)
console.log(result)
console.log(sum) // funkce
console.log(sum(3, 7)) // 10

// ECMA SCRIPT 5, 6 --- ES5, ES6
// arrow functions

// 1. zjednodušení
const sum1 = (a, b) => {
  return a + b
}

// 2. zjednodušení - funkce jen rovnou vrací výraz
const sum2 = (a, b) => a + b

// 3. zjednodušení - funkce bere právě jeden argument
const double = a => 2 * a

console.log(double(double(2))) //8

