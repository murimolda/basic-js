const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let sum = 0;
      if (i !== 0 && j !== 0 && i !== matrix.length - 1 && j !== matrix[i].length - 1) {
        let strN = i - 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        strN = i + 1;
        colN = j - 1;
        count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j - 1] === true) {
          sum++;
        }
        if (matrix[i][j + 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i === 0 && j !== 0 && j !== matrix[i].length - 1) {
        let strN = i + 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j - 1] === true) {
          sum++;
        }
        if (matrix[i][j + 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i === matrix.length - 1 && j !== 0 && j !== matrix[i].length - 1) {
        let strN = i - 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j - 1] === true) {
          sum++;
        }
        if (matrix[i][j + 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i !== 0 && j === 0 && i !== matrix.length - 1) {
        let strN = i - 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j + 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i !== 0 && j === matrix[i].length - 1 && i !== matrix.length - 1) {
        let strN = i - 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j - 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i === 0 && j === 0) {
        let strN = i + 1;
        let colN = 0;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j + 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i === 0 && j === matrix[i].length - 1) {
        let strN = i + 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j - 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i === matrix.length - 1 && j === 0) {
        let strN = i - 1;
        let colN = 0;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j + 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
      if (i === matrix.length - 1 && j === matrix[i].length - 1) {
        let strN = i - 1;
        let colN = j - 1;
        let count = 0;
        while (count < j + 2) {
          if (matrix[strN][colN] === true) {
            sum++;
          }
          colN++;
          count++;
        }
        if (matrix[i][j - 1] === true) {
          sum++;
        }
        arr.push(sum);
      }
    }
    result.push(arr);
  }
  return result;
}

module.exports = {
  minesweeper
};
