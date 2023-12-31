// 인터페이스 타입호환
// 구조적으로 오른쪽 타입이 더 커야함 (class도 동일)
interface Person {
  name: string;
}

interface Developer {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;
person = developer;
// 타입호환 안됨 => 구조적으로 오른쪽 타입이 더 커야함 (class도 동일)
// developer = person; //error입



// 함수
// 구조적으로 오른쪽이 파라메타가 작어야함
var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
}
sum = add;
// add = sum; //error

//제네릭
//바디에 뭐가 오냐에 따라 호환 될지 결정 될 것 같음
interface Empty<T> {
  // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1

//호출부에서 타입이 결정되기 때문에 호환 안됨
interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// notEmpty1 = notEmpty2; //error
// notEmpty2 = notEmpty1; //error