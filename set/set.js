// Set stores unique values of any type

const unique = new Set();

unique.add('item');
unique.add('item') // Wont work as is duplicate
unique.add('second')
unique.add(3)

// unique.delete('item') True or False
// unique.clear()

console.log(unique.has(4));

console.log(unique);
