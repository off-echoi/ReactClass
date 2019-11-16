// 대문자 = 생성자함수(호출용도로 쓰지 않겠다. 객체를 생성할때 쓴다.)
// 생성자함수의 this는 자기자신
// 생성자함수의 규칙
// 내부적으로자기 자신을 가르키는 this 가 생성 (빈 객체가 생성된다.)
// return문이 없으면 this가 리턴 됨
// return문이 있으면 리턴되는 타입이 객체일 경우에만 유효
function Person() {
  this.arms = 2;
  this.legs = 2;
  // return 3; 유효하지 않음 오로지 객체타임만 리턴
} 
// es6의 class 문법으로 확장

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
var person = new Person(); //여기의 괄호를 호출이 아니고 person에 담는다(생성).
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
// literal 객체로  person 객체를 생성하시오.
//=========> var person = {arms:2, legs:2}
// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(arms);
// console.log(person.arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?