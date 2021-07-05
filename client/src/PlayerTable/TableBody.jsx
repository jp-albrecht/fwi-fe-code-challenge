import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Flags from 'react-world-flags';
import { AppContext } from '../Context/AppContext';

import Avatar from '../Avatar';
import { COUNTRIES } from '../constants';
import { useDispatch } from 'react-redux';
import { addEditPlayer } from '../appState/actions';

const TableBody = ({ players, deletePlayer }) => {
  const { setOpen, sortByHighest } = useContext(AppContext);
  const dispatch = useDispatch();

  return (
    <table
      id="player-table-body"
      role="presentation"
      className="table table--body"
    >
      <tbody>
        {players
          .sort((firstEl, secondEl) => {
            if (sortByHighest) {
              return firstEl.winnings < secondEl.winnings;
            } else {
              return firstEl.winnings > secondEl.winnings;
            }
          })
          .map(({ id, name, country, winnings, imageUrl }) => (
            <tr key={id} role="row" className="table__row">
              <td role="gridcell" className="table__avatar">
                <Avatar src={imageUrl} />
              </td>
              <td role="gridcell" className="table__player">
                {name}
              </td>
              <td role="gridcell" className="table__winnings">
                {winnings.toLocaleString(undefined, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </td>
              <td role="gridcell" className="table__native">
                <div className="country">
                  <Avatar>
                    <Flags code={country} alt="" />
                  </Avatar>
                  {country}
                </div>
              </td>
              <td role="gridcell" className="table__edit">
                <button
                  className="table__button"
                  onClick={() => {
                    dispatch(addEditPlayer(id));
                    setOpen(true);
                  }}
                >
                  ✏️
                </button>
              </td>
              <td role="gridcell" className="table__delete">
                <button
                  className="table__button"
                  onClick={() => deletePlayer(id)}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

TableBody.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.oneOf(Object.keys(COUNTRIES)),
      winnings: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableBody;
