
function person() {
  this.arms = 2; //글로벌 this(window)에 2를 할당(화살표 함수가 아니기때문에)
  this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms); //에러 남 함수가 호출되기 전이라서
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person());
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
console.log(arms); // global this 위에서 함수를 호출을 해주었기때문에 출력됨