import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {updateUser} from "./redux/actions";

// const action = {
//   type : 'updateUser',
//   // payload :'TaMi',
//   userName :'TaMi'
// };
//
store.dispatch(updateUser);


/*const reducer = (state,action) =>{
  if(action.type === 'changeState'){
    return action.payload;
  }else{
  // 리턴값이 초기 상태
  return 'Statessssssssssssss'
  }
};

// 리듀서(융합자) : param은 state와 action 두개임!
// 기본 state와 액션(dispatch)를 융합하여  state 변경 혹은 관리, 그 후 가입한 view에게 state를 뿌려줌
// window... 설치하면 크롬 개발자툴 에서 확인가능!
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log(store);
// 초기 스테이트값 출력
console.log("CreateStore",store.getState());

// subscribe  는 콜백 펑ㄴ션임.. 이 한줄은 일단 가입! 하는 것
store.subscribe(()=>console.log('subscribe', store.getState()));

// action dispatch test
const action = {
  // 타입을 필수!
  type:'changeState',
  payload:'new Statesssssssssssss',
};

// 값만 담아주고, 아직 리듀서가 변형(융합)하기 전! 위에 const reducer에서 변형 로직을 넣어줘야함!
store.dispatch(action);
console.log('AfterDispatch', store.getState());*/



ReactDOM.render(
  <Provider store="{store}"><App /></Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
