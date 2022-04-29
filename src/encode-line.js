const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let result = '';
  while (count < str.length) {
    let number = 1;
    while (str[count] === str[count + 1]) {
      number++;
      count++;
    }
    if (number === 1) {
      result = `${result}${str[count]}`;
    } else {
      result = `${result}${number}${str[count]}`;
    }
    number = 0;
    count++;

  }
  return result;

}
module.exports = {
  encodeLine
};
