// 숫자형 enum
enum ShoesNumber {
  NIKE,
  ADIDAS
}
var myShoesNumber = ShoesNumber.NIKE;
console.log(myShoesNumber); // 0

// 문자형 enum
enum ShoesString {
  NIKE = 'NIKE',
  ADIDAS = 'ADIDAS'
}

var myShoesString = ShoesString.NIKE;
console.log(myShoesString); // 0

function ask(answer: string) {
  if (answer === "yes") {
    console.log("yes");
  } else if (answer === "no") {
    console.log("no");
  }
}
ask("yes"); //문자열 파라메터 값 검증 할 때 enum 으로 제약이 필요함

enum Answer {
  NO = 'N',
  YES = 'Y'
}
function askEnum(answer: Answer) {
  if (answer === Answer.NO) {
    console.log("no");
  }
  if (answer === Answer.YES) {
    console.log("yes");
  }
}
askEnum(Answer.YES);
