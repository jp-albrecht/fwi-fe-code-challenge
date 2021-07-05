import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPlayerSuccess } from '../appState/actions';

import './CreatePlayer.scss';
import { COUNTRIES } from '../constants';
import { AppContext } from '../Context/AppContext';

const CreatePlayer = () => {
  const { setOpen } = useContext(AppContext);
  const [name, setName] = useState('');
  const [winnings, setWinnings] = useState('');
  const [country, setCountry] = useState('US');

  const dispatch = useDispatch();

  async function createPlayer(newPlayerInfo) {
    try {
      const response = await fetch('http://localhost:3001/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayerInfo),
      });
      const json = await response.json();
      dispatch(createPlayerSuccess(json));
    } catch {
      console.error('Something went wrong...');
    }
  }

  return (
    <div role="row" className="player-modal">
      <div className="player-modal__avatar"></div>
      <div className="player-modal__player">
        <input
          type="text"
          value={name}
          placeholder="Players Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="player-modal__winnings">
        <input
          type="text"
          value={winnings}
          placeholder="Total Winnings"
          onChange={(e) => setWinnings(e.target.value)}
        />
      </div>
      <div className="player-modal__native">
        <div className="country">
          <select
            name="countries"
            defaultValue="US"
            onChange={(e) => setCountry(e.target.value)}
          >
            {Object.entries(COUNTRIES).map(([abbrev, name], index) => {
              return (
                <option value={abbrev} key={index}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="player-modal__delete">
        <button
          className="player-modal__button"
          onClick={() => {
            console.log(winnings.replace(/,/g, ''));
            createPlayer({
              name,
              winnings: Number(winnings.replace(/,/g, '')),
              country,
            }).then(() => {
              setName('');
              setWinnings('');
              setCountry('');
              setOpen(false);
            });
          }}
        >
          Add Player
        </button>
      </div>
    </div>
  );
};

export default CreatePlayer;
