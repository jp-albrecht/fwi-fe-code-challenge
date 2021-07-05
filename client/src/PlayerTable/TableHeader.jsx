import React from 'react';
import { Icon } from '@iconify/react';
import bxSortAlt2 from '@iconify-icons/bx/bx-sort-alt-2';
import { useContext } from 'react';

import { AppContext } from '../Context/AppContext';

const TableHeader = () => {
  const { sortByHighest, setSortByHighest } = useContext(AppContext);

  return (
    <table
      id="player-table-header"
      role="presentation"
      className="table table--fixed"
    >
      <thead>
        <tr role="row">
          <th role="columnheader" className="table__header table__avatar" />
          <th role="columnheader" className="table__header table__player">
            Player
          </th>
          <th
            role="columnheader"
            className="table__header table__winnings"
            title="Sort by winnings (high/low)"
          >
            <Icon
              icon={bxSortAlt2}
              className="table__icon"
              onClick={() => setSortByHighest(!sortByHighest)}
            />
            Winnings
          </th>
          <th role="columnheader" className="table__header table__native">
            Native of
          </th>
          <th role="columnheader" className="table__header table__edit" />
          <th role="columnheader" className="table__header table__delete" />
        </tr>
      </thead>
    </table>
  );
};

export default TableHeader;
