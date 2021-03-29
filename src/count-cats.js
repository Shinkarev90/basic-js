const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.join().split(',');
    let array = arr.filter(function(el) {
        return el == '^^';
    })
    return array.length;
};

