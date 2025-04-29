function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const parts = numbers.split(/,|\n/); // regex: comma OR newline
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
