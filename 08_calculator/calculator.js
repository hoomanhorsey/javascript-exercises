const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	  return arr.reduce((sum, current) => sum + current, 0);

};

const multiply = function(arr) {
    return arr.reduce((sum, current) => sum * current);

};

const power = function(a, b) {
  let sum = a;
  for (let i = 1; i < b; i++) {
      sum *= a;
  };
  return sum;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  let factorial = a;
  let multiplier = a - 1;
  for (let i = a; i > 1; i--) {
    factorial = factorial * multiplier;
    multiplier = multiplier - 1;
  }
  return factorial; 
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
