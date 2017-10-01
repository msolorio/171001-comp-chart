export const TILE_CLICKED = 'TILE_CLICKED';

export const tileClicked = (tileId) => {
  console.log('in tileClicked action creator');
  return {
    type: TILE_CLICKED,
    tileId
  }
};
