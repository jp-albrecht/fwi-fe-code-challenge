import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  CREATE_PLAYER_SUCCESS,
} from './constants';

export default function playerIds(state = [], action) {
  const newState = [...state];
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case DELETE_PLAYER_SUCCESS:
      /** Filter through all playerIds and remove the one selected by the user. */
      return newState.filter((id) => id !== action.payload.id);
    case CREATE_PLAYER_SUCCESS:
      return [...state, action.payload.player.id];
    default:
      return state;
  }
}
