import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYERS} from "./actionTypes";

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name: name,
});

export const changScore = (id,delta) => ({
  type :CHANGE_SCORE,
  id:id,
  delta:delta,
});

export const removePlayer = (id) => ({
    type : REMOVE_PLAYERS,
    id
});