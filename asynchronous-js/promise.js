const cont = document.querySelector('.container');
const btn = document.querySelector('.btn');
let url = 'https://source.unsplash.com/random';

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
      reject(new Error(`Something wrong with the url ${url}`));
    });
    img.src = url;
  });
}

// Async await is a simpler syntax
// async function someFunction () {
//   await
// }

// const func = async () {
//   await...
// }
