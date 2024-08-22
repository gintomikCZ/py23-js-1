// matematické operace

// operátory: + - * /

let a = 10
// a = a + 1
a += 1
a++

console.log('a' + 'hoj') // 'ahoj'
console.log('1' + '1') // '11'
console.log('1' + 1) // '11'
console.log(1 + '1') // '11'
console.log(2 + 1 + '5') // '35'
console.log('2' + 1 + 5) // '215'
console.log('2' + (1 + 5)) // '26'
// _______

// typeof - operátor, který vrací název datového typu
let type = typeof 78.2
console.log(type) // 'number'


/*
string - 'string'
number - 'number'
boolean - 'boolean'
bigint - 'number'
undefined - 'undefined'
null - 'object'
NaN - 'number'

array - 'object'
object - 'object'
function - 'function'
*/

const multiple = (num1, num2) => num1 * num2

let result = multiple(8, 'ahoj')

if (typeof result === 'number') {
  console.log(result)
}

/*

if (cond1) {

} else if (cond2) {

} else if (cond3) {

} else {

}

and = &&
or = ||
not = !

*/


let num1 = 10
let num2 = '20'

let result1 = ('' + num1) === ('' + num2)
let result2 = + num1 === + num2

/*
jak ověřit datové typy
let value = ???
string - if (typeof value === 'value')
boolean - if (typeof value === 'boolean')
undefined - if (value === undefined)
null - if (value === null)
NaN - if (Number.isNaN(value))
number - if ((typeof value === 'number') && !Number.isNaN(value))

array - if (Array.isArray(value))
object - if ((typeof value === 'object') && value !== null && !Array.isArray(value))
function - if (typeof value === 'function')
*/

const isObject = value => (typeof value === 'object') && value !== null && !Array.isArray(value)

console.log(isObject([2, 3]))
console.log(isObject(null))
console.log(isObject({}))

let aa = null
let bb = aa
aa = undefined
console.log(aa)
console.log(bb)