
// 함수가 제네릭하지 않을 경우 타입으로 인한 메소드 중복 생성 단점이 있음
function logString(text: string) {
  console.log(text)
}
logString("hello");

function logNumber(num: number) {
  console.log(num)
}
logNumber(10);

// 유니온 => input 만 타입선언 가능
function logUnion(text: string | number) {
  console.log(text)
  return text;
}
const result = logUnion("hello");
//리턴 타입이 string | number 때문에 에러 발생함
// result.replace("hello", "world");

// 제네릭 => 호출 하는 시점에 타입이 결정됨
function logTextGeneric<T>(text: T):T {
  console.log(text);
  return text;
}

const resultGeneric = logTextGeneric<string>("hello");
resultGeneric.replace("hello", "world");

//이렇게도 쓸수 있을것 같음 input: generic, output: boolean
function logTextGenericLogin<T>(text: T): boolean {
  console.log(text);
  return true;
}
const isLogin = logTextGenericLogin<string>("hello");
console.log(isLogin)

//인터페이스에 제네릭 선업하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
//호출 하는 시점에 타입이 결정됨
const obj1: Dropdown<string> = {
  value: 'hello',
  selected: false
}

//제네릭 타입 제한 1
function logTextLength<T>(text: T): T {
  // console.log(text.length);// --> 타입스크립트는 어떤 타입이 알 수 없음
  return text;
}
logTextLength('hi');

function logTextLengthHint<T>(text: T[]): T[] { // --> [] 흰트를 줌
  console.log(text.length);// -->
  return text;
}
logTextLengthHint<string>(['hi', 'hello']);

//제네릭 타입 제한 2 - extends 정의된 타입 이용하기
//extends 타입을 확장하는 기능
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  console.log(text.length);  // 타입 제한 1 처럼 [] 힌트가 없어됨
  return text;
}
logTextLength2('abc'); // 문자열은 기본적으로 length 를 가지고 있음
logTextLength2({length: 10}) //number는 length 가 없으로 타입을 추가해야함

//제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption('name');


