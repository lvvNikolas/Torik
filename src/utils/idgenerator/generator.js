export const idGenerator = (collectionName, adsName = "") =>
  `${collectionName}_${Date.now()}`;
