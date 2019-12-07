import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

// 이 아이가 state가 됨
// 리듀서를 두개 합침  //{JSON 형태로 넣어줌}
export const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});