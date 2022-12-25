// ! Properties are set, get, size, clear, delete.

const map = new Map();

map.set(1, 'foo');
// * Set property returns a map and other map properties can be stringed along as...

map
  .set(2, 'two')
  .set(3, 'three')
  .set(true, 'true value')
  .set(false, 'false value')
  .set('categories', ['list1', 'list2']);

console.log(map);

console.log(map.get('categories'));
console.log(map.size);
console.log(map.delete(false));
console.log(map);
map.clear();

const betterMap = new Map([
  [1, 'one'], // item 1
  [2, 'two'], // item 2
]);

// Or use a ```Object.entries()``` method to create a new map.

const otherMap = new Map(Object.entries(someObject));
