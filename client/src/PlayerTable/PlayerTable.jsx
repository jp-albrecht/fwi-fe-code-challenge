import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlayersSuccess, deletePlayerSuccess } from '../appState/actions';

import './PlayerTable.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const getPlayers = (state) => state.playerIds.map((id) => state.players[id]);

const PlayerTable = () => {
  const dispatch = useDispatch();

  const deletePlayer = async (id) => {
    await fetch(`http://localhost:3001/players/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    });

    dispatch(deletePlayerSuccess(id));
  };

  useEffect(() => {
    (async function fetchPlayers() {
      const response = await fetch('http://localhost:3001/players', {
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      dispatch(fetchPlayersSuccess(json));
    })();
  }, [dispatch]);

  const players = useSelector(getPlayers);

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody players={players} deletePlayer={deletePlayer} />
    </div>
  );
};

export default PlayerTable;
