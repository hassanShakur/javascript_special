# JavaScript Special

Some common JS concepts, OOP and Classes

- Apply()
- Bind()
- String template literal tagging function
- ES 6
- Object convertion to array using:
  - Object.keys()
  - Object.values()
  - Object.entries()
- Set
- Others

### Optional Chaining

Helps prevent errors in case a property does not exist, returning undefined instead. Syntax is using `?.` before upcoming properties.

```js
restaurants?.openingHours?.mon?.time ?? defaultValue = whatever;

// Or

const list = [];
console.log(list[0]?.name ?? 'List is empty');

```

### Nullish Coalescing Operator (`??`)

Returns `false` only if the conndition is undefined or null. Other values like empty strings, 0 etc. are considered true.

### Map Object

Map is similar to objects but the keys can be anything unlike in objects where the keys are strings.

```js
// ! Properties are set, get, size, clear, delete.

const map = new Map();

map.set(1, 'foo');
// * Set property returns a map and other map properties can be stringed along as...

map.set(2, 'two').set(true, 'true value').set('categories', ['list1', 'list2']);

console.log(map.get('categories'));
console.log(map.size);
console.log(map.delete(false));
map.clear();
```

To use arrays as keys, the array must first be initialized so it points to the same address that can be used in the `get` method.

```js
const arr = [1, 2];
map.set(arr, 'Array as key');
map.get(arr);
```

Instead of using `set`, a simpler syntax is using array of arrays like the result of using `Object.entries()` to set map items.

````js
const betterMap = new Map([
  [1, 'one'], // item 1
  [2, 'two'], // item 2
]);

// Or use a ```Object.entries()``` method to create a new map.

const otherMap = new Map(Object.entries(someObject));
````

## Asynchronous JS

- Promises
  - Resolve `.then`
  - Reject `.catch`

```js
btn.addEventListener('click', () => {
  loadImage(url)
    .then((data) => {
      cont.appendChild(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Something wrong with the url ${url}`));
    });
    img.src = url;
  });
}
```

## AJAX

### XMLHttpRequest

```js
const xhr = new XMLHttpRequest();

xhr.open('GET', './api/sample.txt');

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('done successfully');
  } else {
    console.log({ status: xhr.status, text: xhr.statusText });
  }
};

xhr.send();
```

### Fetch

Similar to `xhr` but has a much simpler, cleaner syntax. `Fetch` returns a response in form of a string which can be converted to a json using .json() - A method that rturns a Promise that can be handled as any other object.

```js
fetch(url)
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Same thing can be accomplished using async wait functions with fetch... Enclose em in try catch blocks if you may.

```js
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
```
