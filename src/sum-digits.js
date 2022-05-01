const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let string = String(n);
  let count = 0;
  let sum = 0;
  while (count < string.length) {
    sum += Number(string[count]);
    count++;
  }

  if (sum >= 10) {
    // getSumOfDigits(sum)  Не работает рекурсия, видимо, что-то не учитываю. Поэтому пока костыли;
    let result = sum;
    let string = String(result);
    let count = 0;
    let sum2 = 0;
    while (count < string.length) {
      sum2 += Number(string[count]);
      count++;
    }
    return sum2;
  } else {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
