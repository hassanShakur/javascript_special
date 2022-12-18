const main = document.querySelector('.main');

let saying = 'some random saying';
let fullName = 'Jane Doe';

main.innerHTML = bluerize`Some person named ${fullName} said ${saying}`;

function bluerize(text, ...vars) {
  console.log({ text, vars });
  const blueText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ''}</strong>`;
  });

  return blueText.join('');
}
