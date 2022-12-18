const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector('.btn');

// Without .bind, the this will reference not to the counter but the button clicked
// btn.addEventListener('click', counter.increment.bind(counter));

const bindedCounter = counter.increment.bind(counter);
btn.addEventListener('click', bindedCounter);
