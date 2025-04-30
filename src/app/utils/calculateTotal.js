import { usePathname } from "next/navigation";

export const calculateFeatureTotals = (
  features,
  selectedPhases = [],
  initialPhases = [],
  speed = 3
) => {
  const pathname = usePathname();
  const isFeaturePage = pathname.includes("feature");

  // console.log("features inside calculateFeatureTotals", features);
  // console.log("selectedPhases inside calculateFeatureTotals", selectedPhases);
  // console.log("initialPhases inside calcualteFeatureTotals", initialPhases);
  if (!Array.isArray(features)) {
    console.error("Expected features to be an array but got:", features);
    features = [];
  }

  const fixedCost = features.reduce(
    (sum, feature) => sum + parseFloat(feature.price || 0),
    0
  );

  const customizationCost = features.length * 10;
  const totalTimeline = features.reduce(
    (sum, feature) => sum + parseFloat(feature.timeline || 0),
    0
  );
  const indicativeDurationInWeeks = Math.ceil(totalTimeline / 7);

  // ✅ Bonuses for selected phases
  const bonusModifiers = {
    "Product Roadmap": 0.1,
    "Professional Prototype": 0.18,
    "Full Build": 0.2,
  };

  let fixedBonus = 0;
  let customizationBonus = 0;

  selectedPhases?.forEach((id) => {
    const phase = initialPhases?.find((p) => parseInt(p.id) === id);
    if (phase && bonusModifiers[phase.name]) {
      const modifier = bonusModifiers[phase.name];
      fixedBonus += fixedCost * modifier;
      customizationBonus += customizationCost * modifier;
    }
  });

  const penaltyModifiers = {
    Design: 0.08,
    MVP: 0.05,
  };

  let fixedPenalty = 0;
  let customizationPenalty = 0;

  Object.entries(penaltyModifiers).forEach(([phaseName, penalty]) => {
    const isSelected = initialPhases?.some((phase) => {
      const result =
        phase.name === phaseName && selectedPhases.includes(String(phase.id));
      return result;
    });

    if (!isSelected) {
      fixedPenalty += fixedCost * penalty;
      customizationPenalty += customizationCost * penalty;
    }
  });

  const totalFixedCost = fixedCost + fixedBonus - fixedPenalty;
  const totalCustomizationCost =
    customizationCost + customizationBonus - customizationPenalty;

  return {
    fixedCost: isFeaturePage ? fixedCost : totalFixedCost,
    customizationCost: isFeaturePage
      ? customizationCost
      : totalCustomizationCost,
    totalCost: isFeaturePage
      ? (fixedCost + customizationCost).toFixed(0)
      : (totalFixedCost + totalCustomizationCost).toFixed(0),
    indicativeDurationInWeeks,
    phasesCost:
      fixedBonus + customizationBonus - (fixedPenalty + customizationPenalty),
  };
};
