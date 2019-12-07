import React from "react";
import {connect} from "react-redux";
import {changScore} from "../redux/actions";

export class Counter extends React.Component{
  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement"
                onClick={()=>this.props.changScore(this.props.id, -1)}
        > - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={()=>this.props.changScore(this.props.id, 1)}
        > + </button>
      </div>
    )
  }
}

const mapActionToProps = (dispatch) => ({
  changScore: (id,delta) => dispatch(changScore(id,delta))
});

export default connect(null, mapActionToProps)(Counter);