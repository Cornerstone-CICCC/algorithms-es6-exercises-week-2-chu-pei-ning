/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  let letters = data.split("")
  let count = 0
  for (let i = 0; i < letters.length; i++) {
    switch(letters[i]){
      case "a":
        count += 1
        break
      case "e":
        count += 1
        break
      case "i":
        count += 1
        break
      case "o":
        count += 1
        break
      case "u":
        count += 1
        break
      default:
        count += 0
        break
    }
  }
  return count
}

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
