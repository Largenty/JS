// Reverse a word
// ex: word -> drow

function reversedWord(str) {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

// or

function solution(str) {
  return str.split("").reverse().join("");
}
