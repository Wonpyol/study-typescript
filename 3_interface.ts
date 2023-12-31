interface User {
  name: string;
  age: number;
}

var won: User = {
  name: 'wonpyol',
  age: 40
}
// 함수에 인퍼페이스 활용
// 인터페이스의 파라디터만 체크함
function getUser(user: User): void {
  console.log(user);
}
const pyol = {
  name: 'wonpyol',
  age: 40
}
getUser(pyol); //인터페스 규격 준수 필요 (파라미터)

// 함수의 구조에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}
var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b
}
sum(1, 2);

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b'];
// arr[0] = 10 //오류
arr[0] = 'hello' //OK

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value) {
  console.log(obj[value]);
})

// 인터페이스 상속
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
  skill: string;
}

var wonpyol: Developer = {
  name: 'wonpyol',
  age: 40,
  language: 'ts',
  skill: 'typescript'
}