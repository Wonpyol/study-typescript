
interface Person {
  name: string,
  age: number
}
var won: Person = {
  name: 'wonpyol',
  age: 40
}
// 인터페이스를 이용한 타입 선언
// 타입은 확장되지 않으므로 가능한 인터페이스를 사용해야함
type PersonAlias = {
  name: string,
  age: number
}
var pyol: PersonAlias = {
  name: 'wonpyol',
  age: 40
}
// 모든 타입에 대해서 별칭을 사용할 수 있음
type MyString = string;
var str: MyString = 'hello';