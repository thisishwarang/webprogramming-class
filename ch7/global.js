// 1
// var savedUser = "이은성";
// function account() {
//   console.log("반갑습니다. " + savedUser + "님");
// }
// account();
// console.log("또 오셨네요. " + savedUser + "님");

// 2
// var savedUser = "이은성";
// function account() {
//   console.log("반갑습니다. " + savedUser + "님");
//   savedUser = "이귀엽";
// }
// account();
// console.log("또 오셨네요. " + savedUser + "님");

// 3
var savedUser = "이은성";
function account() {
  var savedUser = "이귀엽";
  console.log("반갑습니다. " + savedUser + "님");
}
account();
console.log("또 오셨네요. " + savedUser + "님");
