const letters = ['A', 'B', 'C', 'D', 'E'];

// Every - Checks if every array element satisfy condition

let ans = letters.every((letter) => letter !== 'C');
console.log(ans);

// Some returns true if any - not all - of the items match the search

ans = letters.some((letter) => letter === 'A');
console.log(ans);

// Find is like filter but returns first value thats true and in its original form not a list of items
// FindIndex just returns index instead

let people = [
  { fname: 'name', lname: 'lastName', city: 'chicago' },
  { fname: 'other', lname: 'someOther', city: 'vegas' },
];

const found = people.find((person) => person.city === 'vegas');
console.log(found);
