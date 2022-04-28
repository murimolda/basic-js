const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let nameArr = [];
  let teamName = '';
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (members[i] !== null) {
        if ((typeof (members[i]) === 'string')) {
          nameArr.push(members[i].trim()[0].toLocaleUpperCase());
        }
      }
    }
  }

  nameArr.sort();
  for (let j = 0; j < nameArr.length; j++) {
    teamName = `${teamName}${nameArr[j]}`;
  }

  return teamName;
}

module.exports = {
  createDreamTeam
};
