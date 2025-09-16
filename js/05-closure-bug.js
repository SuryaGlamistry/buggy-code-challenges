function createCounters() {
  let counters = [];
  for (var i = 1; i <= 3; i++) {
    counters.push(() => console.log(i));
  }
  return counters;
}

let funcs = createCounters();
funcs[0](); // Expected 1
funcs[1](); // Expected 2
funcs[2](); // Expected 3
