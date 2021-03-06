import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  return (
    <div className="App">
      <p>{props.user}</p>
    </div>
  );
}

// subscribe: 스토어의 state를 props로 매핑하기
// combineReducer에서 가져옴 (reducer 밑의 index.js 파일)

const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  products: state.products,
  user: state.user
});

// publish: (액션을 디스패치하는) 펑션을 props 로 매핑하기
// 액션을 dispatch 하는 function을 props로 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  updateUser: (name) => dispatch(updateUser(name))
});


// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(mapStateToProps, mapActionToProps)(App);