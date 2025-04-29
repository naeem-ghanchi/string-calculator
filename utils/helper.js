function expectedNegativesMessage(...nums) {
  return `negative numbers not allowed ${nums.join(",")}`;
}

module.exports = expectedNegativesMessage;
