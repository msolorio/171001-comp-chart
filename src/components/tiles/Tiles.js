import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';
import tileData from './tileData';
import './Tiles.css';
import { tileClicked } from '../../actions';

export function Tiles(props) {

  function handleTileClick(tileId) {
    props.dispatch(tileClicked(tileId));
  }

  function isTileActive(tileId) {
    return props.activeTiles.indexOf(tileId) < 0 ? false : true;
  }

  const tiles = tileData.tiles.map((tile, index) => {
    return (
      <Tile {...tile}
        key={index}
        index={index}
        handleTileClick={handleTileClick}
        isTileActive={isTileActive(tile.id)}/>
    );
  });

  return (
    <div className="Tiles">
      {tiles}
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeTiles: state.TilesReducer.activeTiles
});

export default connect(mapStateToProps)(Tiles);
