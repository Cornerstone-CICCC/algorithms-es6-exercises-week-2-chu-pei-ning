/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  const letter = input.split(" ")
  const newLetters = [letter[0]]
  for(let i = 1; i < letter.length; i++){
    const newLetter = letter[i].charAt(0).toUpperCase() + letter[i].slice(1)
    newLetters.push(newLetter)
  }
  cameLetters = newLetters.join("")
  return cameLetters
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
