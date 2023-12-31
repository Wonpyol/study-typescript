interface Developer {
  name: string;
  skill: string
}

interface Person {
  name: string
  age: number
}


function introduce(): Developer | Person {
  return {
    name: 'wonpyol',
    age: 10,
    skill: 'TypeScript'
  }
}

let someone = introduce();
// console.log(someone.skill)// error -> 유니온 타입은 공통된 속성만 가능함!
//skill 을 뽑아내려면?
if((someone as Developer).skill) {
  console.log((someone as Developer).skill);
}
//age 를 뽑으르면?
if((someone as Person).age) {
  console.log((someone as Person).age);
}

//if 문이 많어지고 중복코드 및 가독성이 떨어짐
//타입 가드로 변경해보자
function isDeveloper(target: Developer | Person): target is Developer { //Developer 인지 타입가드 추가
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(someone)) {
  console.log(someone.skill);
} else {
  console.log(someone.age);
}