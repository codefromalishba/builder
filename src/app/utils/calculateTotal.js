import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { speedOptions, userRanges } from "@/data";

export const useFeatureTotals = (
  features,
  selectedPhases = [],
  initialPhases = [],
  speed = 3
) => {
  const pathname = usePathname();
  const isFeaturePage = pathname.includes("feature");

  const speedIndex = Math.max(0, Math.min(speed - 1, speedOptions.length - 1));
  const speedAdjustment = speedOptions[speedIndex]?.adjustment || 0;
  const speedDurationAdjustment = speedOptions[speedIndex]?.durationChange || 0;

  const { cloudEnabled, cloudRangeIndex } = useSelector(
    (state) => state.feature
  );

  if (!Array.isArray(features)) {
    console.error("Expected features to be an array but got:", features);
    features = [];
  }

  const fixedCost = features.reduce(
    (sum, feature) => sum + parseFloat(feature.price || 0),
    0
  );

  const customizationCost = features.length * 10;
  const totalTimeline =
    features.reduce(
      (sum, feature) => sum + parseFloat(feature.timeline || 0),
      0
    ) +
    (Array.isArray(selectedPhases) && Array.isArray(initialPhases)
      ? selectedPhases.reduce((sum, id) => {
          const phase = initialPhases.find((p) => String(p.id) === id);
          return sum + (phase?.duration || 0);
        }, 0)
      : 0);

  const durationInWeeks = Math.ceil(totalTimeline / 7);

  const indicativeDurationInWeeks = Math.ceil(
    durationInWeeks + speedDurationAdjustment
  );

  // Bonuses for selected phases
  const bonusModifiers = {
    "Product Roadmap": 0.1,
    "Professional Prototype": 0.18,
    "Full Build": 0.2,
  };

  let fixedBonus = 0;
  let customizationBonus = 0;

  if (Array.isArray(selectedPhases)) {
    selectedPhases.forEach((id) => {
      const phase = initialPhases?.find((p) => parseInt(p.id) === id);
      if (phase && bonusModifiers[phase.name]) {
        const modifier = bonusModifiers[phase.name];
        fixedBonus += fixedCost * modifier;
        customizationBonus += customizationCost * modifier;
      }
    });
  }

  const penaltyModifiers = {
    Design: 0.08,
    MVP: 0.05,
  };

  let fixedPenalty = 0;
  let customizationPenalty = 0;

  Object.entries(penaltyModifiers).forEach(([phaseName, penalty]) => {
    const isSelected = initialPhases?.some((phase) => {
      return (
        phase.name === phaseName &&
        Array.isArray(selectedPhases) &&
        selectedPhases.includes(parseInt(phase.id))
      );
    });

    if (!isSelected) {
      fixedPenalty += fixedCost * penalty;
      customizationPenalty += customizationCost * penalty;
    }
  });

  const baseFixedCost = fixedCost + fixedBonus - fixedPenalty;
  const baseCustomizationCost =
    customizationCost + customizationBonus - customizationPenalty;

  const speedFixedBonus = baseFixedCost * speedAdjustment;
  const speedCustomizationBonus = baseCustomizationCost * speedAdjustment;

  const finalFixedCost = baseFixedCost + speedFixedBonus;
  const finalCustomizationCost =
    baseCustomizationCost + speedCustomizationBonus;

  let cloudCost = 0;
  if (!isFeaturePage && cloudEnabled && userRanges[cloudRangeIndex - 1]) {
    cloudCost = userRanges[cloudRangeIndex - 1].maxPrice || 0;
  }

  return {
    fixedCost: isFeaturePage ? fixedCost : finalFixedCost,
    customizationCost: isFeaturePage
      ? customizationCost
      : finalCustomizationCost,
    totalCost: isFeaturePage
      ? Math.ceil(fixedCost + customizationCost).toFixed(0)
      : Math.ceil(finalFixedCost + finalCustomizationCost).toFixed(0),
    cloudCost,
    indicativeDurationInWeeks,
    totalTimeline,
    phasesCost:
      fixedBonus + customizationBonus - (fixedPenalty + customizationPenalty),
  };
};
