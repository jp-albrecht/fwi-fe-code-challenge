import React from 'react';

import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';
import { useContext } from 'react';
import { ModalContext } from '../Context/modalContext';

const Header = () => {
  const { open, setOpen } = useContext(ModalContext);

  return (
    <header id="main-header" className="header">
      <div className="logo">
        <CloudColor className="logo__color" />
        <CloudEffects className="logo__effects" />
      </div>
      <h1 className="header__title">FWI Poker Challenge</h1>
      <button className="btn" onClick={() => setOpen(true)}>
        Add Player
      </button>
    </header>
  );
};

export default Header;
