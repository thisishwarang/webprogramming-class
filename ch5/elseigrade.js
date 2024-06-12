let score = prompt("점수를 입력하세요. : ");
if (score >= 91 && score <= 100) {
  console.log("A학점");
} else if (score >= 81 && score <= 90) {
  console.log("B학점");
} else if (score >= 71 && score <= 80) {
  console.log("C학점");
} else if (score >= 61 && score <= 70) {
  console.log("D학점");
} else if (score >= 0 && score <= 60) {
  console.log("F학점");
} else {
  console.log("범위를 벗어났습니다.");
}
