import { ADD_EDIT_PLAYER } from './constants';

export default function editPlayer(state = null, action) {
  switch (action.type) {
    case ADD_EDIT_PLAYER:
      return action.payload.id;
    default:
      return state;
  }
}
