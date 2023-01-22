const add = function(add1, add2) {
  return add1 + add2;
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2;
};

const sum = function(toSum) {
  return toSum.reduce((a, b) => a + b, 0);
};

const multiply = function(toMult) {
  return toMult.reduce((a, b) => a * b, 1);
};

const power = function(pow1, pow2) {
	return pow1 ** pow2;
};

const factorial = function(toFact) {
  facted = 1;
	for (i = 1; i <= toFact; i++) {
    facted *= i;
  }
  return facted;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
