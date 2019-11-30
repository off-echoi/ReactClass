import React from 'react';

export class Stopwatch extends React.Component {
  tickRef;
  state = {
    isRunning : false,
    timer : 0,
  };
  handleStopwatch = () =>{
    // JSON을 리턴한다는 뜻으로 ()를 붙힘
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  };

  render() {
    return (
      <div className="stopwatch">
        <h1 className="h1">StopWatch</h1>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop':'Start'}</button>
        <button onClick={()=>this.setState({timer:0})}>Reset</button>
      </div>
    );
  };

  tick = () => {
    if(this.state.isRunning){
      this.setState(prevState => ({timer:prevState.timer+1}))
    }
  }
  // 네트워크로 데이터 fetch, 3rd 라이브러리 초기화
  componentDidMount() {
    // console.log('cdm');
    this.tickRef = setInterval(this.tick,1000);

  }

  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

}