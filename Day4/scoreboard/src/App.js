import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {CustomPlayer} from './components/CustomPlayer'
import AddPlayerForm from "./components/AddPlayerForm";
// import {updateUser} from "../../redux-tutorial/src/redux/actions";
import {connect} from "react-redux";
import _ from 'lodash'

class App extends React.Component {
  getHighScore(){
    const maxObj =_.maxBy(this.props.players,'score');
    return maxObj.score;
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players}/>
        {
          this.props.players.map((player) => (
            <CustomPlayer name={player.name} id={player.id} key={player.id}
                    score = {player.score} isHighScore={this.getHighScore() === player.score}
            />
          ))
        }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players,
  user: state.user
});

// const mapActionToProps = (dispatch) => ({
//   updateUser: (name) => dispatch(updateUser(name))
// });

export default connect(mapStateToProps)(App);
