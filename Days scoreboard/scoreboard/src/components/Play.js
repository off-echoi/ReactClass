import React from "react";
import {Counter} from './Counter';

// export class Player extends React.PureComponent
// pureComponent 는 shouldComponentUpdate를 대신해서 변회된 값만 가져올 수 있따.(부분 렌더륑!)
export class Player extends React.Component {
	render() {
		console.log(this.props.name, 'rendered');
		console.log(this.props,'player Props ::::::::::::::::::');
		const {removePlayer, id, name , score, handleChange} = this.props;
		return (
			<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
				{name}
			</span>
				<Counter
					score={score}
					id={id}
					handleChange={handleChange}
				/>
			</div>
		)
	}

// 	shouldComponentUpdate(nextProps, nextState, nextContext) {
// 		// console.log(nextProps);
// 		if(nextProps.score !== this.props.score){
// 			return true;
// 		}else{
// 			return false;
// 		}
// 	}
//
};

