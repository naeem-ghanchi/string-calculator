function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  if (numbers.includes(",")) {
    const parts = numbers.split(",");
    return parts.reduce((sum, num) => sum + parseInt(num), 0);
  }
  return parseInt(numbers);
}

module.exports = add;
