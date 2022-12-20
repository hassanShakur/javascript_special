// Arrays

const people = ['jane', 'Han', 'Susan', 'others'];
// A comma to skip an item.... Names can differ
const [jane, han, , other] = people;
console.log(jane, han, other);

// Swapping variables - Must use let
let first = 'love';
let last = 'hate';
[first, last] = [last, first];

console.log(first);

// Objects

const john = {
  fname: 'john',
  lname: 'smith',
  jobs: {
    official: 'teacher',
    other: 'freelancer',
  },
};

// Names must match else give an alias after semicolon
const {
  fname,
  jobs: { official: officialJob },
} = john;

console.log(fname, officialJob);
