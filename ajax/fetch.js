// Similar to xhr but much cleaner syntax

const url = './api/people.json';

// fetch(url)
//   .then((Response) => Response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
