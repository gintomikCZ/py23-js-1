// callback functions
// funkce je argumentem v jiné funkci

const sum = (a, b, cb) => {
  let result = a + b
  cb(result)
}

// console.log(sum(2, 3))
// alert(sum(5, 6))

// sum(2, 3, console.log)
// sum(5, 6, alert)

// cykly

// for (let i = 1; i < 10; i = i + 1) {
//   console.log(i)
// }

const fruits = ['jablko', 'hruška', 'švestka']

// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// const cb = (item) => {
//   console.log(item)
// }

fruits.forEach((fruit, index, array) => {
  console.log((index + 1) + ' of ' + array.length + ' ' + fruit)
})


