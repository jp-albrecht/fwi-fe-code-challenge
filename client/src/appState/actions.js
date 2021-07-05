import {
  FETCH_PLAYERS_SUCCESS,
  DELETE_PLAYER_SUCCESS,
  CREATE_PLAYER_SUCCESS,
  MODIFY_PLAYER_SUCCESS,
  ADD_EDIT_PLAYER,
} from './constants';

export function fetchPlayersSuccess(data) {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export function deletePlayerSuccess(id) {
  return { type: DELETE_PLAYER_SUCCESS, payload: { id } };
}

export function createPlayerSuccess(player) {
  return { type: CREATE_PLAYER_SUCCESS, payload: { player } };
}

export function modifyPlayerSuccess(player) {
  return { type: MODIFY_PLAYER_SUCCESS, payload: { player } };
}

export function addEditPlayer(id) {
  return { type: ADD_EDIT_PLAYER, payload: { id } };
}
