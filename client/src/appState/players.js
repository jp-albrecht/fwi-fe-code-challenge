import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  CREATE_PLAYER_SUCCESS,
} from './constants';

function mergePlayers(state, { players }) {
  const newState = { ...state };
  players.forEach((player) => {
    newState[player.id] = player;
  });
  return newState;
}

function deletePlayer(state, id) {
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function addPlayer(state, player) {
  return {
    ...state,
    [player.id]: player,
  };
}

export default function players(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return mergePlayers(state, action.payload.data);
    case DELETE_PLAYER_SUCCESS:
      return deletePlayer(state, action.payload.id);
    case CREATE_PLAYER_SUCCESS:
      return addPlayer(state, action.payload.player);
    default:
      return state;
  }
}
