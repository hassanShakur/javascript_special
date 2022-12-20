// Spread operator - also used in copying items instead of referencing them

const someone = 'someName';
const letters = [...someone];

console.log(letters);

const person = { fname: 'Han', lname: 'Ummy' };
// Repeat same property name to overide
const otherPerson = { ...person, lname: 'Has', newProperty: 'Tokyo' };

console.log(person);
console.log(otherPerson);

// Rest operator - passing the reet of remaining values

const scoresName = ['Diliraba', 44, 78, 94, 88];
const [someName, ...scores] = scoresName;

console.log(someName);
console.log(scores);
