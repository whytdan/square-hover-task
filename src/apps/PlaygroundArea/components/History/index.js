import React, { useContext } from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { gameContextProvider } from '../../../../contexts/GameContext';

const useStyles = makeStyles(() => ({
  container: {
    width: 250,
    maxHeight: 500,
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column'
  },
  historyPointCard: {
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    marginTop: 20,
    border: '2px solid #000',
    backgroundColor: '#fbf8e3',
    color: '#7d7140',
    fontWeight: 600
  }
}));

const History = () => {
  const muiClasses = useStyles();
  const { history } = useContext(gameContextProvider);

  return (
    <div className={muiClasses.container}>
      <Typography variant="h4">Hover squares</Typography>

      {history.map((checkpoint, index) => (
        <Paper
          key={index}
          elevation={3}
          className={muiClasses.historyPointCard}
        >
          {`row ${checkpoint.x + 1} col ${checkpoint.y + 1}`}
        </Paper>
      ))}
    </div>
  );
};

export default History;
