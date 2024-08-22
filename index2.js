
// object = dictionary
// array (pole) = list

/*
// primitivní data types
  - string
  - number
(  - bigint)
  - boolean (true, false)
  - undefined (undefined)
  - null (null)
  - NaN (NaN) - výsledek nesmyslné matematické operace Not a Number

// komplexní, složité, referenční
  - array
  - object
  - function


*/

let a = null
console.log(a)

let b = 20 / 'ahoj'
console.log(b)

const ar = ['ahoj', 8, null, undefined, NaN, [1, 2, 'Praha']]
console.log(ar.length) // 6
console.log(ar[2]) // null
console.log(ar)
console.log(ar[5][2]) // 'Praha'

const obj = {
  firstname: 'Karel',
  lastname: 'Houska',
  age: 38,
  city: 'Praha',
  dogs: [
    {
      name: 'Jack',
      breed: 'cocker'
    },
    {
      name: 'Jessie',
      breed: 'collie'
    }
  ]
}
console.log(obj)
console.log(obj.lastname)
let property = 'age'
console.log(obj[property])
console.log(obj.dogs[1]['na' + 'me']) // 'Jessie'
console.log(obj.dogs[1].name) // 'Jessie'


// ----------------


let var1 = 10
let var2 = var1
var2 = var2 + 9

console.log(var1) // 10
console.log(var2) // 19

// -----------------

let person1 = {
  first: 'karel',
  last: 'houska'
}

let person2 = person1
person2.first = 'franta'
console.log(person1.first + ' ' + person1.last) // 'franta houska'
console.log(person2.first + ' ' + person2.last) // 'franta houska'

