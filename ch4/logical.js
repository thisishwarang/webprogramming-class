console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var id = "jamsuham";
var pw = "1111";
var result =
  id == "jamsuham" && pw == "1111"
    ? "로그인되었습니다."
    : "아이디 또는 비번이 틀렸습니다.";
console.log(result);

console.log(false && "jamsuham");
console.log(true && "jamsuham");
console.log("jamsuham" && false);
console.log("jamsuham" && true);
console.log("jamsuham" && "1111");
console.log(null && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var age = 30;
var result = age > 65 || age < 7 ? "지원 대상입니다." : "지원 대상이 아닙니다.";
console.log(result);

console.log(false || "jamsuham");
console.log(true || "jamsuham");
console.log("jamsuham" || false);
console.log("jamsuham" || true);
console.log("jamsuham" || "1111");
console.log(null || false);

console.log(!false);
console.log(!true);

console.log(!"jamsuham");
console.log(!null);
console.log(!0);

var id = "jamsuham";
var result =
  id !== null && id !== undefined
    ? "아이디가 입력되었습니다."
    : "아이디가 입력되지 않았습니다.";
console.log(result);

var id = "jamsuham";
var result =
  id ?? null ? "아이디가 입력되었습니다." : "아이디가 입력되지 않았습니다.";
console.log(result);
