const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let string = String(str);
  let obj = options;
  let repeat;
  let separator = '+';
  let addition = '';
  let additionRepeat;
  let additionSeparator = '|';

  for (let key of Object.keys(obj)) {
    if (key === 'repeatTimes' && typeof (obj[key]) === 'number') {
      repeat = obj[key];
    }
    if (key === 'separator' && typeof (obj[key]) === 'string') {
      separator = obj[key];
    } string
    if (key === 'addition' && typeof (obj[key]) === 'string') {
      addition = obj[key];
    } else if (key === 'addition' && typeof (obj[key]) !== 'string') {
      addition = obj[key];
    }
    if (key === 'additionRepeatTimes' && typeof (obj[key]) === 'number') {
      additionRepeat = obj[key];
    }
    if (key === 'additionSeparator' && typeof (obj[key]) === 'string') {
      additionSeparator = obj[key];
    }
  }

  if (repeat !== undefined) {
    let count = 0;
    if (additionRepeat !== undefined) {
      while (count < repeat - 1) {
        let subcount = 0;
        result = `${result}${string}`;
        while (subcount < additionRepeat - 1) {
          result = `${result}${addition}${additionSeparator}`;
          subcount++;
        }
        result = `${result}${addition}`;
        result = `${result}${separator}`;
        count++;
      }
      let subcount = 0;
      result = `${result}${string}`;
      while (subcount < additionRepeat - 1) {
        result = `${result}${addition}${additionSeparator}`;
        subcount++;
      }
      result = `${result}${addition}`;
    } else {
      while (count < repeat - 1) {
        result = `${result}${string}${addition}${separator}`;
        count++;
      }
      result = `${result}${string}${addition}`;
    }
  } else {
    if (additionRepeat !== undefined) {
      let subcount = 0;
      result = `${result}${string}`;
      while (subcount < additionRepeat - 1) {
        result = `${result}${addition}${additionSeparator}`;
        subcount++;
      }
      result = `${result}${addition}`;
    } else {
      result = `${result}${string}${addition}`;
    }
  }

  return result;
}

module.exports = {
  repeater
};
