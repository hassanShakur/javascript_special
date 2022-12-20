// Not when using objects
// Unlike array functions, break and continue can be used

const fruits = ['apple', 'banana', 'mango', 'berries'];

for (let fruit of fruits) {
  if (fruit === 'mango') {
    continue;
  }
  console.log(fruit);
}
