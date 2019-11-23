import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import { Player } from './components/Play'


class App extends React.Component {
  state = {
    players: [
      {id: 1, name: 'LDK', score:10 },
      {id: 2, name: 'EUN', score:40 },
      {id: 3, name: 'KIM', score:20 },
      {id: 4, name: 'HON', score:35 },
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map((player) => (
            <Player name={player.name} id={player.id} key={player.id}
                    score = {player.score}
                    handleChange = {this.handleChangeChange}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    )
  }
  handleRemovePlayer = (id) => {
    console.log('removePlayer: ', id);
    const players = this.state.players.filter(player => player.id !== id);
    console.log(players);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      // Immutable 함수 = 새로운 배열을 리턴 = shallow comparison
      // 키와 변수가 같을 경우 한쪽을 생략: shorthand property
      return { players }
    })
  }

  handleChangeChange=(id,delta)=>{
    // 1. 부모 컴포넌트에 펑션 작성
    // 2. 펑션을 자식에게 props로 전달
    // 3. 자식 컴포넌트가 props 로 받은 펑션을 호출
    console.log('handleChange : ', id, " : ",delta);
    this.setState((prev)=>{
      const players = [...prev.players];
      players.forEach(player=>{
        if(player.id === id){
          return player.score += delta
        }
      });
      return { players :players }
    })
  }
}


export default App;
