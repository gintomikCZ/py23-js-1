const isNumber = (a) => typeof a === 'number' && !Number.isNaN(a)


const calculator = {
  sum: (a, b) => {
    if (isNumber(a) && isNumber(b)) {
      return a + b
    }
    console.log('error')
  },
  subtract: (a, b) => {
    if (isNumber(a) && isNumber(b)) {
      return a - b
    }
    console.log('error')
  },
  multiply: (a, b) => {
    if (isNumber(a) && isNumber(b)) {
      return a * b
    }
    console.log('error')
  },
  divide: (a, b) => {
    if (isNumber(a) && isNumber(b) && b !== 0) {
      return a / b
    }
    console.log('error')
  }
}

const sum = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b
  }
  console.log('error')
}

const subtact = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a - b
  }
  console.log('error')
}

const multiple = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a * b
  }
  console.log('error')
}

const divide = (a, b) => {
  if (isNumber(a) && isNumber(b) && b !== 0) {
    return a / b
  }
  console.log('error')
}


console.log(calulator.multiply(4, 5)) // 20