const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  } else {
    let newArr = arr.slice();
    let checkArr = [];
    for (let i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
        case '--discard-next': if (i + 1 !== newArr.length) {
          checkArr.push(newArr[i + 2]);
          newArr.splice(newArr.indexOf(newArr[i]), 2);
        } else {
          newArr.splice(newArr.indexOf(newArr[i]), 1);
        }
          i--;
          break;

        case '--discard-prev': if (i !== 0 && !checkArr.includes(newArr[i])) {
          if (!checkArr.includes(newArr[i - 1])) {
            newArr.splice(newArr.indexOf(newArr[i - 1]), 2);
          } else {
            newArr.splice(newArr.indexOf(newArr[i - 2]), 1);
            newArr.splice(newArr.indexOf(newArr[i - 1]), 1);
          }
        } else {
          newArr.splice(newArr.indexOf(newArr[i]), 1);
        }
          break;

        case '--double-next': if (i + 1 !== newArr.length) {
          checkArr.push(newArr[i + 1]);
          newArr.splice(newArr.indexOf(newArr[i]), 1, newArr[i + 1]);
        } else {
          newArr.splice(newArr.indexOf(newArr[i]), 1);
        }
          break;

        case '--double-prev': if (i !== 0 && !checkArr.includes(newArr[i])) {
          newArr.splice(newArr.indexOf(newArr[i]), 1, newArr[i - 1]);
        } else {
          newArr.splice(newArr.indexOf(newArr[i]), 1);
        }
          break;

        default:
          break;
      }
    }
    return newArr;
  }
}
module.exports = {
  transform
};
