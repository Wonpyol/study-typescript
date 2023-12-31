// 타입 추론 기본 1
// string 으로 타입 추론함 ==> 10 + '10' = '1010'
function getB(b = 10) {
  var c = 'hello'
  return b + c;
}
// 타입 추론 기본 2
interface DropDown<T> {
  value: T;
  selected: boolean;
}
// 호출부에서 타입 결정됨
var shoppingItem: DropDown<string> = {
  value: 'hello', //타입추론됨
  selected: false
}

//타입 추론 기본 3
interface DetailDropDown<K> extends DropDown<K> {
  description: string;
  tag: K;
}

var detailItem: DetailDropDown<string> = {  // DetailDropDown<string>에 의해 부모도 타입추론됨.
  value: 'hello',
  selected: false,
  description: 'hello',
  tag: 'hello'
}

//타입 추론 기본 4 : Best Common Type
//모든 타입을 union으로 묶어 나간다라고 생각하면됨
let arr =  [1,2,3, true]  // arr의 타입은 (number | boolean)[]로 추론됨
let y = [1, null]; // y의 타입은 (number | null)[]로 추론됨
let x = 3; // x의 타입은 number로 추론됨
let z = { name: 'John', age: 30 }; // z의 타입은 { name: string, age: number }로 추론됨



//tool 에서 tsserver 가 돌고 있어서 타입추론이 가능함 (language server)



