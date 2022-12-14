// Factory funcs
// Main concept is the return
function car(model, year) {
  return {
    model,
    year,
    speed() {
      console.log(`The car moves at a good speed`);
    },
  };
}

subaru = car('subaru', 1977);
subaru.speed();
console.log(subaru.year);
