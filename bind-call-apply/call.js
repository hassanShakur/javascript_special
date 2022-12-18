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

function run(speed, units) {
  console.log(`${this.name} is running... The speed is ${speed} ${units}`);
}

console.log(Han.age);
run.call(Han);

// Using method in Han and properties in Has
Han.sleep.call(Has);

// Call accepts other arguments as list of items
run.call(Has, 50, 'kph');

// Apply uses array of items
run.apply(Han, [43, 'mph']);

// Bind we assign vars and call it later
const bindHan = run.bind(Han, 30, 'kph');
bindHan();
