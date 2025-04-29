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
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
