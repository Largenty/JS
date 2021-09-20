// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// numbers = "1 2 3 4 5 6"

function highAndLow(numbers){
    const num = numbers.split(' ');
    const max = Math.max(...num)
    const min = Math.min(...num)
    return `${max} ${min}`
  }

  // expect "6 1"