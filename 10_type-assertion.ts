// 타입 단언
var a; //any
a = 10;
a = 'hello';
var b = a //any
var c = a as string //string

//DOM API 조작
// <div id="root"></div>
var div = document.querySelector('#root') //타입스크립트 입장에서 #root 있는지 모름
if (div) {
  div.innerHTML = 'hello'
}

var div1 = document.querySelector('#root') as HTMLDivElement; // ==> 타입 단언
div1.innerHTML = 'hello';

