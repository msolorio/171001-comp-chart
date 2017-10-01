export const TILE_CLICKED = 'TILE_CLICKED';

export const tileClicked = (tileId) => {
  return {
    type: TILE_CLICKED,
    tileId
  }
};
