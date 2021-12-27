/**
 * Design an algorithm that encodes a string of characters, such that it fits this pattern:
 *
 *   Example 1:
 * 'a a a a b b b c c' leads to this encoding: '4a3b2c'
 *
 *   Example 2:
 * 'a a b c c a b c c' leads to this encoding: '3a2b4c'
 *
 * Essentially, you are counting the number of each letter that is in the input string, and
 * appending that number, along with the letter it represents, to an intially empty output
 * string, while making sure each letter that is represented in the output string is sorted
 * in alphabetical order (i.e. the output string '4b2c1a3d' will not work because letters 'b'
 * and 'c' come before 'a').
 */

const stringEncode = str => {
  if (str.length === 0 || str === '') return str;
  let prevChar = 0;
  let counter = 0;
  let stringOutput = '';
  const repeatChars = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === prevChar || str.split('').includes(prevChar)) {
      counter++;
    } else {
      if (prevChar !== 0) {
        stringOutput += counter+prevChar;
      }
      prevChar = str[i];
      counter = 1;
    }
  }
  stringOutput += counter+prevChar;
  return stringOutput;
}

console.log(stringEncode("aabccabcc")); // Should return '4a3b2c'
