// 1.
// let dic = new Object();

// dic.boy = "소년";
// dic.girl = "소녀";
// dic.friend = "친구";

// console.log(dic.boy);
// console.log(dic.girl);
// console.log(dic.friend);

// 2.
// let dic = {
//     boy : '소년',
//     girl : '소녀',
//     friend : '친구'
// }

// console.log(dic.boy)
// console.log(dic.girl)
// console.log(dic.friend)

// 3.
// let dic = {
//   boy: "소년",
//   girl: "소녀",
//   friend: "친구",
// };
// dic.apple = "사과";
// dic.ten = 10;
// console.log(dic.apple);
// console.log(dic.ten);

// 4.
// let dic = {
//   boy: "소년",
//   girl: "소녀",
//   friend: "친구",
// };

// delete dic.girl;
// console.log(dic.boy);
// console.log(dic.girl);
// console.log(dic.friend);

// 5.
// let dic = {
//   present: "현재",
// };
// console.log(dic.present);
// dic.present = "선물";
// console.log(dic.present);

// 6.
// const unit = {
//   attack: function (weapon) {
//     return `${weapon}으로 공격한다.`;
//   },
// };
// console.log(unit.attack("주먹"));
// console.log(unit.attack("총"));

// 7.
// let dic = {
//     boy : "소년",
//     girl : "소녀",
//     friend : "친구",
// }
// console.log(dic['boy'])
// console.log(dic['girl'])
// console.log(dic['friend'])

// 8.
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let dic = {
//   boy: "소년",
//   girl: "소녀",
//   friend: "친구",
// };
// rl.question("찾을 단어를 입력하세요 : ", function (key) {
//   let word = key;
//   console.log(dic[word]);

//   rl.close();
// });

// 9.
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("다이쓰! 무조건 천원, 상품입력?", function (obj) {
//   let basket = {
//     [obj]: "1000원",
//   };
//   console.log(basket[obj]);

//   rl.close();
// });

// 10.
// let id = "jamsu"
// let pw = "1111"

// let user={
//     id,
//     pw
// }
// console.log(user.id)
// console.log(user.pw)

// 11.
let user = {
  id: "jamsu",
  pw: "1111",
  name: "lch",
  mobile: "010-4477-xxxx",
  country: "대한민국",
};
for (let info in user) {
  console.log(`${info} : ${user[info]}`);
}
