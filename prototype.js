// inheritance
var user = {name: 'won', age: 30}

var admin = {};

var user

admin.__proto__ = user;
console.log(admin); // {}

admin.role = 'admin'

console.log(admin);
console.log(admin.name);
console.log(admin.age);


function Person(name, age) {
  console.log("method")
  this.name = name;
  this.age = age;
}
class PersonClass {
  constructor(name, age) {
    console.log("class")
    this.name = name;
    this.age = age;
  }
}
//function, class 기능 같음 키워드만 틀림
var person = new Person('won', 30);
var person1 = new PersonClass('won', 30);

