export default function calculateSku(activeTiles, tileData) {
  const levels = [
    512,
    16,
    8,
    64,
    9000
  ];

  // returns the highest ranked sku for the active tiles
  return activeTiles.reduce((highestSku, activeTile) => {
    // gets current sku in activeTiles
    const currentSku = tileData.tiles.find(tile => tile.id === activeTile).sku;
    // if current sku is ranked higher than highest sku up to that point it becomes the new highest sku
    return (
      levels.indexOf(currentSku) > levels.indexOf(highestSku)
      ? currentSku
      : highestSku
    );
  }, false);
};
