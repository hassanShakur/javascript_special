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

- Promises - Resolve - Reject

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
      // Resolve fires
      resolve(img);
    });
    img.addEventListener('error', () => {
      // Something went wrong - reject fires
      reject(`Something wrong with the url ${url}`);
    });
    img.src = url;
  });
}
```
