function addTwoNumbers_(x, y) {
  var result = x + y;
  return result;
}

var sum_ = addTwoNumbers_(4, 4);
console.log('sum_', sum_);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var Minutes = convertHoursToMinutes(2);
console.log(Minutes);

function getGreeting(name) {
  var result = name + ' World!"';
  return result;
}

var Hello = getGreeting('"Hello');
console.log(Hello);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var mutiply = addAndMultiplyBy5(10, 5);
console.log(mutiply);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var divide = multiplyAndDivideBy5(35, 10);
console.log(divide);

function subtractTwoNumbers(num1, num2) {
  var result = (num1 - num2);
  return result;
}

var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  var result = radius * 2 * Math.PI;
  return result;
}

var circumfrerence = getCircleCircumference(5);
console.log(circumfrerence);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}

var cubed = cube(5);
console.log('cubed', cubed);
