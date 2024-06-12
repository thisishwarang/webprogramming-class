// 1
// var userName = "이창현";
// var userPW = "1111";

// function account(userid, userpw) {
//   console.log(userid);
//   console.log(userpw);
//   var savedName = "이창현";
//   var savedPw = "1111";

//   if (userid == savedName) {
//     if (userpw == savedPw) {
//       console.log("반갑습니다. " + userid + "님");
//     }
//   }
// }
// account(userName, userPW);

// 2
// var userName = "이창현";
// var userPW = "1111";

// function account(userid, userpw = '1111') {
//   console.log(userid);
//   console.log(userpw);
//   var savedName = "이창현";
//   var savedPw = "1111";

//   if (userid == savedName) {
//     if (userpw == savedPw) {
//       console.log("반갑습니다. " + userid + "님");
//     }
//   }
// }
// account(userName, userPW);

// 3
// function plus(a, b){
//     return (a + b)
// }
// var result = plus(10, 20)
// console.log('두 수의 합 : ' + result)

// 4
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function checkAge(age) {
//     if(age > 19){
//         return true
//     } else {
//         return false
//     }
// }
// rl.question('나이를 입력하세요 : ', function(nai){
//     if(checkAge(nai)){
//         console.log("입장 가능합니다.")
//     } else {
//         console.log("입장을 불허합니다.")
//     }
//     rl.close()
// })

// 5
function Week() {
  console.log("Mon");
  console.log("Tue");
  console.log("Wed");
  return;
  console.log("Thr");
  console.log("Fri");
  console.log("Sat");
  console.log("Sun");
}
console.log(Week() === undefined);
