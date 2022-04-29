const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let checkArr = [];
  let arr = String(n).split('');
  let a;
  for (let i = 0; i < arr.length; i++) {
    a = arr.splice(arr.indexOf(arr[i]), 1);
    checkArr.push(+arr.join(''));
    arr.splice(arr.indexOf(arr[i]), 0, a);
  }
  return Math.max(...checkArr);
}

module.exports = {
  deleteDigit
};
