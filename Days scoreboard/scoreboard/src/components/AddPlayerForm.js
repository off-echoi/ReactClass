import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value : ''
  };
  handleValueChange=(e)=>{
    // e를 안넘겨줬지만 e는 기본적으로 넘어온다.!!!!
    // console.log(e)
    this.setState({value: e.target.value})
  };

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

    this.props.addPlayer(this.state.value);
    // 폼 초기화
    this.setState({value: ''})

  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate >
        <input id="player" type="text" className="input"
               value={this.state.value}
               onChange={this.handleValueChange}
               placeholder="enter a player's name"
               required //필수 요소..!
               // autoFocus
        />
        <input type="submit" className="input" value="Add Player"/>

      </form>
    );
  }
}