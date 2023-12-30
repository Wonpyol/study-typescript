//함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
  return a + b;
}

//함수의 반환 값에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
function optional(a: string, b?:string, c?:string): void {
}
optional('hello');
optional('hello', 'world');
optional('hello', 'world', 'optional');
