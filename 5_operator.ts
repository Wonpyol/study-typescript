
function logMessage(message: string) {
  console.log(message);
}

logMessage("hello");


// 타입을 any 로 했을때 타입스크립트 장점이 사라짐
function logMessageAny(message: any) {
  console.log(message);
}
logMessageAny("hello");
logMessageAny(100);
logMessageAny(true)

// 유니온타입 => 타입을 한가지 이상을 사용하고 싶을 때
function loMessageUnion(message: string | number | boolean) {
  //타입이 추론되어 타입속성을 활용할 수 있음
  if(typeof message === "string") {
    console.log(message);
  } else if(typeof message === "number") {
    console.log(message);
  } else if(typeof message === "boolean") {
    console.log(message);
  } else {
    throw new TypeError("value is not string or number or boolean");
  }

}
loMessageUnion("hello");
loMessageUnion(100);
loMessageUnion(true)

var won: string | number | boolean = "hello";



interface Person {
  name: string; //공통 속성
  age: number;
}

interface Developer {
  name: string; //공통 속성
  skill: string;
}

// 공통 속성만 사용할 수 있음 (type safe)
function askSomeoneUnion(someone: Person | Developer) {
  someone.name;
}
askSomeoneUnion({name: "홍길동", age: 30});
askSomeoneUnion({name: "홍길동", skill: "typeScript"});

//인터섹션 타입 => 모든 속성을 사용할 수 있음
function askSomeoneIntersection(someone: Person & Developer) {
  someone.name;
  someone.skill;
  someone.age;
}
// Person & Developer 합친 타입을 생성하게됨
askSomeoneIntersection({name: "홍길동", skill: "typeScript", age: 30});