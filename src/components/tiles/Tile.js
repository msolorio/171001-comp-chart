import React from 'react';

export default function Tile(props) {

  function handleTileClick() {
    props.handleTileClick(props.id);
  }

  const activeClass = props.isTileActive ? ' Tile-active' : '';  

  return (
    <div className={`Tile${activeClass}`}
      onClick={handleTileClick}>
      {props.text}
    </div>
  );
};
