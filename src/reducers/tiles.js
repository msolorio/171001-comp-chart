import * as actions from '../actions';

const initialState = {
  activeTiles: []
};

const TilesReducer = (state=initialState, action) => {
  if (action.type === actions.TILE_CLICKED) {

    let newActiveTiles;

    if (state.activeTiles.indexOf(action.tileId) < 0) {
      newActiveTiles = state.activeTiles.concat(action.tileId);
    } else {
      newActiveTiles = state.activeTiles.filter(tileId => tileId !== action.tileId);
    }

    return Object.assign({}, state, {
      activeTiles: newActiveTiles
    });
  }

  return state;
};

export default TilesReducer;
