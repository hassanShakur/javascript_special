// Using .call to access functions defined outside objects
// funcName.call(Object)

const Han = {
  name: 'Han',
  age: 18,
  sleep() {
    console.log(`${this.name} is sleeping...`);
  },
};

const Has = {
  name: 'Has',
  age: 19,
};

function run() {
  console.log(`${this.name} is running...`);
}

console.log(Han.age);
run.call(Han);

// Using method in Han and properties in Has
Han.sleep.call(Has);
