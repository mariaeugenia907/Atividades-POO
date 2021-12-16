
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

var numbers = [40, 20, 50, 10, 30];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);