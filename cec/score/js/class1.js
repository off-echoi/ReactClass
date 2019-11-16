// Student 라는 이름의 클래스를 생성하시오.
  // class Student {}
// 생성자를 추가하시오.
  // class Student{
  //   constructor(){
  //
  //   }
  // }

// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오

// 생성자 함수 - 리턴값이 있다.
// 클래스는 constructor라는 생성자가 있ㄷㅏ.
    class Student{
  // 클래스 바로 밑에 오는것들은 바로 속성이 됨
  // ex))) name = 'aaa'
      constructor(names){
        //  this 자기자신 name 객체의 속성 names 파람
        this.name = names;
      }
      changeName(userName){
        this.name = userName;
      }
    }
// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오
const user1 = new Student('jane');
console.log(user1);
// changeName이라는 이름의 메서드를 추가하시오.
// 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.
//   class Student{
//     constructor(names){
//       //  this 자기자신 name 객체의 속성 names 파람
//       this.name = names;
//     }
//     changeName(userName){
//       this.name = userName;
//     }
//   }


// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
// 값이 바뀌었는지 출력해서 확인해보자
user1.changeName('Tom');
console.log(user1);
// 생성자의 역할은 무엇인가?
// +++++++++++============> 속성을 초기화한다.!!!
// new로 만들어주기 전까지는 클래스는 바이트 코드일 뿐
// 클래스는 속성과 메서드가 있다.
// 붕어빵 틀= 클래스 / 속성 = 반죽배합, 앙금 / 설명서 = 메서드(goddnl)
// 생성자에 사용된 this는 무엇을 가르키는가?
// +++++++++++============> 자기자신