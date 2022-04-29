const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newStr1;
  let newStr2;
  if (s1.length >= s2.length) {
    newStr1 = s1.split('');
    newStr2 = s2.split('');
  } else {
    newStr1 = s2.split('');
    newStr2 = s1.split('');
  }
  let count = 0;
  for (let i = 0; i < newStr1.length; i++) {
    if (newStr2.includes(newStr1[i])) {
      newStr2.splice(newStr1[i], 1)
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
