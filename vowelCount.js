// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match

function getCount(str) {
    var vowels = str.match(/[aeiouAEIOU]/gi)
    return vowels === null ? 0 : vowels.length;
  }