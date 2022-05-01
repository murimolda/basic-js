const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.result = 1;
  }
  calculateDepth(arr) {
    if (Array.isArray) {

      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.result++;
          arr = arr.flat(1);
          this.calculateDepth(arr[i]);
        }
      }
    } else {
      this.result++;
      arr = arr.flat(1);
    }
    return this.result;
  }
}

const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
