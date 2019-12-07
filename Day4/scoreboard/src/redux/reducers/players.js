import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYERS} from "../actionTypes";

let maxId = 4;

const playerInitialState ={
  players: [
    {id: 1, name: 'LDK', score:1 },
    {id: 2, name: 'EUN', score:2 },
    {id: 3, name: 'KIM', score:3 },
    {id: 4, name: 'HON', score:4 },
  ]
};


export const playerReducer = (state = playerInitialState, action) => {
  let players;
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players : [ ...state.players, {id:++maxId, name:action.name ,score:0 }],

      };
    case CHANGE_SCORE:
      players = [...state.players];
      players.forEach(player => {if(player.id === action.id) {player.score += action.delta}})
      return {
        ...state,
        players:players
      };
    case REMOVE_PLAYERS :
      players = state.players.filter(player => player.id !== action.id)
      return {
        ...state,
        players
      }
  }
  return state;
};