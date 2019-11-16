// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?
// 함수 선언문
// 호출을 위에 넣어도 에러없이 동작함
// function myName(first, last) {
//   console.log(first + last);
// };


// 함수 표현식
// 호이스팅은 선언(이름)까지만 되고, 할당된 것은 호이스팅 되지 않음 즉 함수 표현식은 꼭 아래에서 호출해줘야함
var myName = function (first, last) {
  console.log(first + last);
};

myName("Yan", "Fan");

