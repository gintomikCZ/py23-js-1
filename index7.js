// object document

console.log(document)
// DOM - Document Object Model
// DOM manipulation

// const obj = {
//   name: 'Karel',
//   greet () {
//     console.log('hi, i am karel')
//   }
// }

// vybírat elementy z HTML

/*
  výběr jednoho elementu
  - document.getElementById('stringId') - vrací element daného id, nebo null, pokud ho nenajde
  - document.querySelector('css selector') - vrací první element, který vyhovuje selektoru, nebo null

  výběr více elementů
  - document.getElementsByTagName('tagname') - vrací HTMLCollection (třeba i prázdnou [])
  - document.getElementsByClassName('class-name')
  - document.querySelectorAll('css selector') - vrací NodeList (třeba i prázdnou [])
*/
// const el = document.getElementById('myBtn')
// console.log(el)
const el = document.querySelector('#myBtn')
console.log(el)

// vytváření elementů
const newEl = document.createElement('div')
newEl.textContent = 'já jsem nový div'
console.log(newEl)
const body = document.querySelector('body')
body.appendChild(newEl)


// metody a vlastnosti na elementech HTML
// if, jestli to ten element vůbec našlo ....
if (el !== null) {
  el.textContent = 'nový obsah'
}

// el.appendChild(HTMLelement) - připojí HTMLElement na konec struktury el


// const btns = document.getElementsByTagName('button')
// console.log(btns)
// const btnsArray = Array.from(btns)
// console.log(btnsArray)
// btnsArray.forEach(() => {
// })