// Array.of makes an array of defined parameters
// Array.from returns an array-ish array from the parameter
// from can also return array from a nodelist, string, Set...
// Second parameter in Array.from() method is a map method which can be set up right away

let coding = 'coding';
const code = Array.of('code', coding);
console.log(code);

function sum() {
  console.log(arguments);
  let total = Array.from(arguments).reduce(
    (minTotal, currNum) => (minTotal += currNum),
    0
  );
  return total;
}

console.log(sum(3, 4, 5));
