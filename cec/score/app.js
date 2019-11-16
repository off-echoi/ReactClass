// function 컴포넌트를 만들때는 첫 글짜는 대문자로 > html인지... 컴포넌트인지 구문하려고
// 반드시 reat Elememt를 리턴해야한다.
const players = [
  {name:'LDK',id:1},
  {name:'CEC',id:2},
  {name:'KIM',id:3},
  {name:'JUN',id:4},
  {name:'EUN',id:5}
];

const App = (props) => (
  <div className="scoreboard">
    {/* React.createElement 에서 두번째 props부분 속성이 있으면 JSON으로 넘겨준다는 부분 참고 */}
    <Header title='MyScoreBoard' totalPlayers={11}/>
    {
      props.initialPlayers.map(player =>
        // key 는 내부적으로 소비되고 끝남. 즉 자식에게 전달이 안 됨!
        (<Player name={player.name} score={player.score} key={player.id}/>)
      )
    }

  </div>
);

const Header = (props) => {
  console.log('props',props)
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players : {props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => (
  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter/>
  </div>
);

//================== 아래에 클래스로 바꿈
// const Counter=(props)=>(
//   <div className="counter">
//     <button className="counter-action decrement"> - </button>
//     <span className="counter-score">{props.score}</span>
//     <button className="counter-action increment"> + </button>
//   </div>
// );

//extends React.Component 를 쓰면 모든 부모의 상속을 받는다.
// 편리해보이지만 의존성이 강해서 되도록 상속을 안쓰는것이 좋다. 그러면 컴포지션을? 쓰면 된다.
class Counter extends React.Component{
  // stage3에서 추가된 ....
  state={
    score:11
  };
  // 이전 문법
  // constructor(){
  //   // 부모의 속성을 불러냈기때문에 수퍼를 불러내서 부모를 초기화 해주어야함
  //   super();
  //   this.state={
  //     score:10
  //   }
  // }
  incrementScore(){
    // console.log('hi!');
    // this가 안찍힘 왜냐면 상세히응 다음주....
    // 1급객체... 독립해서도 존재할 수 있다. 클릭하면 큐에 쌓여서 독립적으로 있다 그래서 this를 잃어버림(undefined)....
    // 그래서 this.incrementScore.bind(this) 하면 자기자신의 this와 바인드 되기 때문에 this 가 찍힘
    // 그래서 화살표를 쓰는구나....
    // console.log('this???',this);
    // this.setState({
    //   score : this.state.score +=1
    // });
    // setState는 비동기라서 많이 ㅁ많이 클릭하면 안될 수도 있다.그래서 콜백함수로 함
    // return이 하나일 때 return()을 삭제할 수 있지만 JSON을 리턴할 때는 ({}) 형태로 리턴 해야 함
    this.setState(prev=>({score:prev.score + 1}));
  }

  // 이거는 this를 잃어 버리지 않음
  // 여기서의 this는 렉시컬? this
  decrementScore=()=>{
    this.setState(prev=>({score:prev.score - 1}));
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        {/* 신새틱? onclick이 모든 브라우저에서 작동하도록 onClick을 추상화(공통화) 시킴 */}
        {/* 이벤트 오른쪽은 선언문이 와야한다(호출한 결과가 아니구 호출! 만 한다. 즉 function() 말구 function) */}
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    )
  }
}
ReactDOM.render(<App initialPlayers={players}/>, document.getElementById('root'));
