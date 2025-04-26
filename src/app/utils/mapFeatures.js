// utils/mapFeatures.js

export function mapFeatureIdsToSidebarData(featureIds, sidebarData) {
  const matchedFeatures = [];

  featureIds.forEach((id) => {
    sidebarData.forEach((category) => {
      const foundFeature = category.dropDown.find((item) => item.id === id);
      if (foundFeature) {
        matchedFeatures.push(foundFeature);
      }
    });
  });

  return matchedFeatures;
}
