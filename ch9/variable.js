// 1.
function myTest() {
  if (true) {
    var x = 100;
  }
  console.log(x);
}
myTest();

// 2.
function myTest() {
  if (true) {
    const x = 100;
    x = 200;
  }
}
myTest();
