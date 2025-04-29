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
  const negatives = numbersArray.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  return numbersArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
