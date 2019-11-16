// function 컴포넌트를 만들때는 첫 글짜는 대문자로 > html인지... 컴포넌트인지 구문하려고
// 반드시 reat Elememt를 리턴해야한다.


// 1 ) 부모 컴포넌트에 콜백 펑션을 만든다.
//
// 2 ) 콜백 펑션을 자식에게 내려보낸다.
//
// 3 ) 자식컴포넌트에서는 props로 받은 콜백 펑션을 실행한다.
class App extends React.Component{
  state = {
    players : [
      {name:'LDK',id:1},
      {name:'CEC',id:2},
      {name:'KIM',id:3},
      {name:'JUN',id:4},
      {name:'EUN',id:5}
    ]
  };
  render() {
    return(
      <div className="scoreboard">
        <Header title='MyScoreBoard' totalPlayers={11}/>
        {
          this.state.players.map(player =>
            (<Player
              id = {player.id}
              name={player.name}
              score={player.score}
              key={player.id}
              removePlayer={this.handleRemovePlayer}
            />)
          )
        }
      </div>
    )
  }
  handleRemovePlayer(id){
    console.log('id',id);
  }
}

const Header = (props) => {
  console.log('props',props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players : {props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className='remove-player' onClick={()=>props.removePlayer(props.id)}> X </button>
      {props.name}
    </span>
    <Counter/>
  </div>
);

class Counter extends React.Component{
  state={
    score:11
  };

  incrementScore(){
    this.setState(prev=>({score:prev.score + 1}));
  }
  decrementScore=()=>{
    this.setState(prev=>({score:prev.score - 1}));
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
