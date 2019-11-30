import React from "react";
import {Stats} from "./Stats"
import {Stopwatch} from "./Stopwatch";

// export const Header = (props) => {
//   // console.log('props',props);
//   const {title, players} = props;
//   // props가 객체타입이기때문에 구조분해 할당으로 key에 대입해주는것.!
//   return (
//     <header className="header">
//       {/* 선별적으로 props 를 내려받는게 아닌 모든 props 를 다 내려받는다. */}
//       <Stats players = {players}/>
//       <h1 className="h1">{title}</h1>
//       <Stopwatch/>
//     </header>
//   );
// };
export const Header = ({title, players}) => {
  // props가 객체타입이기때문에 구조분해 할당으로 key에 대입해주는것.!
  return (
    <header className="header">
      {/* 선별적으로 props 를 내려받는게 아닌 모든 props 를 다 내려받는다. */}
      <Stats players = {players}/>
      <h1 className="h1">{title}</h1>
      <Stopwatch/>
    </header>
  );
};
