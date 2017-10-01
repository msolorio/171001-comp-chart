export default function calculateSku(activeTiles, tileData) {
  const levels = [
    512,
    16,
    8,
    64,
    9000
  ];

  return activeTiles.reduce((highestSku, activeTile) => {
    const currentSku = tileData.tiles.find(tile => tile.id === activeTile).sku;
    return (
      levels.indexOf(currentSku) > levels.indexOf(highestSku)
      ? currentSku
      : highestSku
    );
  }, levels[0]);
};
