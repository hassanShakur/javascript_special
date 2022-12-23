# javascript_special

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

## Asynchronous JS

- Promises
  - Resolve (.then)
  - Reject (.catch)

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

Similar to xhr but has a much simpler, cleaner syntax. Fetch returns a response in form of a string which can be converted to a json using .json() - A method that rturns a Promise that can be handled as any other object.

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
