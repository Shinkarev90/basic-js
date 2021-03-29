const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.sort) {
    return false;
}
let arr = members.map(el => {
    if (typeof el === 'string') {
        return el.trim();
    }
    return '';
})
let result = '';
let array = arr.forEach(function(el) {
    if (el && typeof el === 'string'){
        result += el[0];
    }
})
return result.toUpperCase().split('').sort().join('');
};
