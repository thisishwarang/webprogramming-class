let char = prompt("문자를 입력하세요. : ");
if (char == "y") {
  console.log("네, 드라이브를 포맷하겠습니다.");
} else if (char == "n") {
  console.log("아니오, 드라이브를 포맷하지 않겠습니다.");
} else {
  console.log("유효하지 않은 문자입니다.");
}
