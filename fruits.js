const fruits = ['jablko', 'hruška', 'švestka', 'pomeranč', 'kiwi']
const vegetables = ['mrkev', 'cibule']

// vytvořit ul - seznam ovoce

/*
- vybereme si z dokumentu div .container
- vytvoříme si nové ul
- přes fruits pustíme cyklus
  - vytvoříme nové li
  - do li strčíme název ovoce jako textContent
  - li strčíme do ul
- ul strčíme do div
*/

const renderItem = (tagName, content, parent) => {
  const el = document.createElement(tagName)
  el.textContent = content
  parent.appendChild(el)
}
// funkce vytvoří nový element, naplní ho textem a vloží do rodiče

const div = document.querySelector('div.container') // výběr rodičvského divu
const ul = document.createElement('ul') // vytváříme nové ul (zatím jen v paměti počítače)

fruits.forEach(item => { // plníme ulko obsahem (jednotlivými li)
  // const li = document.createElement('li') // <li></li>
  // li.textContent = item // <li>jablko</li>
  // ul.appendChild(li) // <ul><li>jablko</li></ul>
  renderItem('li', item, ul)
})
div.appendChild(ul) // konečně vkládáme plné ul do DOMu, do rodičovského divu

const ul2 = document.createElement('ul')

vegetables.forEach(item => {
  renderItem('li', item, ul2)
})

div.appendChild(ul2)


// const person = {
//   first: 'karel',
//   last: 'houska'
// }
// person.first = 'franta'
// let isError = false
// isError = true

const ar = ['jaro', 'leto', 'podzim', 'zima']

if (item === 'jaro') {
  // bhv1
} else if ...ar.

const obj = {
  jaro() {
    //bhv1
  },
  leto () {
    //bhv2
  },
  podzim () {
    //bhv3
  },
  zima () {
    //bhv4
  }
}

obj[item]()


