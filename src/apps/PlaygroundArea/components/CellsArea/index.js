import React, { useContext, useEffect } from 'react';
import { generateCells } from '../../helpers';
import classes from './cellsArea.module.css';
import { gameContextProvider } from '../../../../contexts/GameContext';

const CellsArea = ({ size }) => {
  const { history, cells, hasGameStarted, setHistory, setCells } =
    useContext(gameContextProvider);

  useEffect(() => {
    setCells(generateCells(size));
  }, [size]);

  const onCellHover = (x, y, hovered) => {
    if (hasGameStarted) {
      setCells(
        cells.map((row, rowIndex) =>
          rowIndex === x
            ? row.map((cell, colIndex) => (colIndex === y ? !hovered : cell))
            : row
        )
      );
      if (hovered) {
        setHistory(
          history.filter(
            (checkpoint) => checkpoint.x !== x || checkpoint.y !== y
          )
        );
      } else {
        setHistory([{ x, y }, ...history]);
      }
    }
  };

  function CellsRow({ row, rowIndex }) {
    return (
      <div className={classes.row}>
        {row.map((cell, colIndex) => (
          <div
            style={{ backgroundColor: cell ? '#3d84b8' : '#fff' }}
            onMouseEnter={() => onCellHover(rowIndex, colIndex, cell)}
            key={`${rowIndex}-${colIndex}`}
            className={classes.cell}
          />
        ))}
      </div>
    );
  }

  return (
    cells.length && (
      <div className={classes.cells}>
        {cells.map((row, rowIndex) => (
          <CellsRow key={rowIndex} row={row} rowIndex={rowIndex} />
        ))}
      </div>
    )
  );
};

export default CellsArea;
