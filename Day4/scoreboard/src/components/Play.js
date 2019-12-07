import React from "react";
import Counter from './Counter';
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

// export class Player extends React.PureComponent
// pureComponent 는 shouldComponentUpdate를 대신해서 변회된 값만 가져올 수 있따.(부분 렌더륑!)
export class Player extends React.PureComponent {
	render() {
		const {removePlayer, id, name, score} = this.props;
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{this.props.children}
					{name}
				</span>
				<Counter
					score={score}
					id={id}
				/>
			</div>
		)
	}
}

// 이 라이프사이클대신에 PureCompoent 를 사용한다.
// shouldComponentUpdate(nextProps, nextState, nextContext) {
// 	console.log(nextProps);
// 	if (nextProps.score !== this.props.score) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
const mapActionToProps = (dispatch) => ({
	removePlayer: (id) => dispatch(removePlayer(id))
});

export default connect(null, mapActionToProps)(Player);
