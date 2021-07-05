import { combineReducers } from 'redux';

import playerIds from './playerIds';
import players from './players';
import editPlayer from './editPlayer';

export default combineReducers({
  playerIds,
  players,
  editPlayer,
});
