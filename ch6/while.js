// 1
// var i = 1;
// while (i < 13) {
//   console.log(i + "월");
//   i++;
// }

// 2
// var i = 0;
// while(i < 10){
//     console.log('hello world!')
//     i++
// }

// 3
// var sum = 0;
// var i = 1;
// while(i < 11){
//     sum = sum + i
//     i++
// }
// console.log(sum)

// 4
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("단수를 입력하세요 : ", function(dan){
//     var i = 1;
//     while(i < 10){
//         console.log(dan * i)
//         i++
//     }
//     rl.close()
// })

// 5
// var value = 0;
// while(true){
//     if(value > 100){
//         break
//     }
//     console.log("value의 값 : " + value)
//     value++
// }
// console.log("value는 100보다 크다.")

// 6
// var value = 0;
// while(value < 10){
//     value++;
//     if(value % 2 === 0){
//          continue;
//      }
//     console.log("value의 값 : " + value)
// }

// 7
// var value = 0;
// while(value < 10)
// {
//     value++;
//     (value % 2 == 0) ? continue : console.log("value의 값 : " + value + '<br/>')
// }

// 8
// var dan = 2;
// while (dan < 10) {
//   var num = 1;
//   while (num < 10) {
//     console.log(dan + "*" + num + "=" + dan * num);
//     num++;
//   }
//   dan++;
// }

// 9
// var dan = 2;
// while (dan < 10) {
//   var num = 1;
//   while (num < 10) {
//     if (dan == 6 && num == 1) break;
//     console.log(dan + "*" + num + "=" + dan * num);
//     num++;
//   }
//   dan++;
// }

// 10
var dan = 2;
outside: while (dan < 10) {
  var num = 1;
  while (num < 10) {
    if (dan == 6 && num == 1) break outside;
    console.log(dan + "*" + num + "=" + dan * num);
    num++;
  }
  dan++;
}
