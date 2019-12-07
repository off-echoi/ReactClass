import React from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";

export class AddPlayerForm extends React.Component {

  handleSubmit=(e)=>{
    e.preventDefault(); // 기본이벤트 막기.!
    // e.stopPropagation(); // 이벤트 전파 막기.!

    // 유효성 체크
    const playNode = document.getElementById('player');
    // console.log(playNode.validity.valueMissing);
    console.log(playNode.validity.valid);
    if (!playNode.validity.valid) {
      // isNameValid = true; 에러문구 컨디션널 렌더링
      return;
    }

    this.props.addPlayer(playNode.value);
    // 폼 초기화
    playNode.value = "";

  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate >
        <input id="player" type="text" className="input"
               placeholder="enter a player's name"
               required //필수 요소..!
               // autoFocus
        />
        <input type="submit" className="input" value="Add Player"/>

      </form>
    );
  }
}

// 자식이 부모와 통신할 때!
const mapActionToProps = (dispatch) => ({
  addPlayer: (name) => dispatch(addPlayer(name))
});

export default connect(null,mapActionToProps)(AddPlayerForm);