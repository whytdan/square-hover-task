import React, { useState, useEffect, useContext } from 'react';
import { Button, MenuItem, Select } from '@material-ui/core';
import { fetchGameModes } from './api';
import classes from './playgroundArea.module.css';
import { generateGameModeOptions } from './helpers';
import CellsArea from './components/CellsArea';
import History from './components/History';
import { gameContextProvider } from '../../contexts/GameContext';

const PlaygroundArea = () => {
  const [gameMode, setGameMode] = useState('PICK_MODE');
  const [gameModeOptions, setGameModeOptions] = useState([]);

  const { hasGameStarted, setHistory, setHasGameStarted } =
    useContext(gameContextProvider);

  useEffect(() => {
    fetchGameModes().then((fetchedGameModes) => {
      setGameModeOptions(generateGameModeOptions(fetchedGameModes));
    });
  }, []);

  const handleSelectGameModeChange = (e) => {
    if (e.target.value === 'PICK_MODE') {
      setHasGameStarted(false);
    }
    setGameMode(e.target.value);
    setHistory([]);
  };

  const toggleHasGameStarted = () => {
    setHasGameStarted(!hasGameStarted);
  };

  return (
    <div className={classes.container}>
      <div className={classes.playgroundArea}>
        <div className={classes.playgroundAreaControls}>
          <Select
            value={gameMode}
            className={classes.select}
            onChange={handleSelectGameModeChange}
          >
            <MenuItem value="PICK_MODE">Pick Mode</MenuItem>
            {gameModeOptions.map(({ id, value, label }) => (
              <MenuItem key={id} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>

          <Button
            variant="contained"
            disabled={gameMode === 'PICK_MODE'}
            color={`${hasGameStarted ? 'default' : 'primary'}`}
            onClick={toggleHasGameStarted}
          >
            {hasGameStarted ? 'Finish' : 'Start'}
          </Button>
        </div>
        <CellsArea size={typeof gameMode === 'number' ? gameMode : 5} />
      </div>
      <History />
    </div>
  );
};

export default PlaygroundArea;
