const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let commanArr = [];
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.').reverse();
    let string = '';
    for (let j = 0; j < arr.length; j++) {
      string = `${string}.${arr[j]}`
      commanArr.push(string);
    }
  }
  let obj = {};
  commanArr.forEach(function (a) {
    if (obj[a] != undefined)
      ++obj[a];
    else
      obj[a] = 1;
  });
  return obj;
}
module.exports = {
  getDNSStats
};
