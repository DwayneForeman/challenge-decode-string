// Write your code below this line

/*

In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"

*/

function decoder(s) {
  const shift = parseInt(s[0]); // extract the shift value from the first character of the input string
  let result = ""; // initialize an empty string to store the decoded result

  for (let i = 1; i < s.length; i++) {
    const charCode = s.charCodeAt(i); // get the character code of the current character
    const shiftedCode = ((charCode - shift - 97 + 26) % 26) + 97; // shift the character code and wrap around if necessary
    result += String.fromCharCode(shiftedCode); // convert the shifted character code to its corresponding character and append to the result string
  }

  return result;
}
