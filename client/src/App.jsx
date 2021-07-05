import React from 'react';
import Modal from '@material-ui/core/Modal';

import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import CreatePlayer from './PlayerTable/CreatePlayer';
import { makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { ModalContext } from './Context/modalContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {
  const { open, setOpen } = useContext(ModalContext);
  const classes = useStyles();

  return (
    <>
      <Header />
      <PlayerTable />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          className={classes.paper}
          style={{
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <CreatePlayer />
        </div>
      </Modal>
    </>
  );
};

export default App;
