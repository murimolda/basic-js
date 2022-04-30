const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let check = [];
  let dobleCheck = [];
  let counter = 0;
  for (let i = 0; i < names.length; i++) {
    let str = '';
    let number = 1;
    let add = `(${number})`;
    if (check.includes(names[i])) {
      if (dobleCheck.includes(names[i])) {
        counter++;
        number += counter;
        add = `(${number})`;
        str = `${names[i]}${add}`;
        check.push(str);
      } else {
        str = `${names[i]}${add}`;
        check.push(str);
        dobleCheck.push(names[i]);
      }
    } else {
      check.push(names[i]);

    }
  }
  return check;
}

module.exports = {
  renameFiles
};
