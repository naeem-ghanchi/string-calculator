const expectedNegativesMessage = require("../utils/helper");

function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    delimiter = new RegExp(numbers[2]);
    numbers = numbers.substring(4);
  }

  const parts = numbers.split(delimiter);
  const numbersArray = parts.map((n) => parseInt(n));
  const negativeNumbers = numbersArray.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(expectedNegativesMessage(negativeNumbers));
  }
  return numbersArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
