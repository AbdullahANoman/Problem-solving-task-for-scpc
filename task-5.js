//implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const operations = (first, second, operator) => {
  if (operator == "+") {
    return first + second;
  } else if (operator == "-") {
    return first - second;
  } else if (operator == "*") {
    return first * second;
  } else if (operator == "/") {
    return first / second;
  }
};

const result = operations(10, 20, "/");
console.log(result);
