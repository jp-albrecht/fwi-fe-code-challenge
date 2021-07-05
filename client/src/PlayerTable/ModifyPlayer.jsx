import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { modifyPlayerSuccess } from '../appState/actions';

import './CreatePlayer.scss';
import { COUNTRIES } from '../constants';
import { AppContext } from '../Context/AppContext';

const ModifyPlayer = ({ player }) => {
  const { setOpen } = useContext(AppContext);
  const [name, setName] = useState(player.name);
  const [winnings, setWinnings] = useState(
    player.winnings.toLocaleString(undefined)
  );
  const [country, setCountry] = useState(player.country);

  const dispatch = useDispatch();

  async function modifyPlayer(playerInfo) {
    try {
      const response = await fetch(
        `http://localhost:3001/players/${player.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            Object.fromEntries(
              Object.entries(playerInfo).filter(
                ([key, value]) => value !== player[key]
              )
            )
          ) /** Loop through the players info and filter out all un-edited fields */,
        }
      );
      const json = await response.json();
      dispatch(modifyPlayerSuccess(json));
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
            defaultValue={country}
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
            modifyPlayer({
              name,
              winnings: Number(winnings.replace(/,/g, '')),
              country,
            }).then(() => setOpen(false));
          }}
        >
          Update Player
        </button>
      </div>
    </div>
  );
};

export default ModifyPlayer;
