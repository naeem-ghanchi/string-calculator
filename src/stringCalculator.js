function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  return parseInt(numbers);
}


console.log("should return 0 for empty string", add(""));
console.log("should return number for single number string", add("5"));

module.exports = add;
