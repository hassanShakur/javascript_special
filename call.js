// Using .call to access functions defined outside objects
// funcName.call(Object)

const Han = {
  name: 'Han',
  age: 18,
};

function run() {
  console.log(`${this.name} is running...`);
}

console.log(Han.age);
run.call(Han);
