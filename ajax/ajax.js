const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('GET', './api/sample.txt');

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('done successfully');
  } else {
    console.log({ status: xhr.status, text: xhr.statusText });
  }
};

xhr.send();
