import { speedOptions } from "@/data";
import { usePathname } from "next/navigation";

export const calculateFeatureTotals = (
  features,
  selectedPhases = [],
  initialPhases = [],
  speed = 3
) => {
  const pathname = usePathname();
  const isFeaturePage = pathname.includes("feature");

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

  const indicativeDurationInWeeks = Math.ceil(totalTimeline / 7);

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
      const phase = initialPhases?.find((p) => String(p.id) === id);
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
        selectedPhases.includes(String(phase.id))
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

  const speedIndex = Math.max(0, Math.min(speed - 1, speedOptions.length - 1));
  const speedAdjustment = speedOptions[speedIndex]?.adjustment || 0;

  const speedFixedBonus = baseFixedCost * speedAdjustment;
  const speedCustomizationBonus = baseCustomizationCost * speedAdjustment;

  const finalFixedCost = baseFixedCost + speedFixedBonus;
  const finalCustomizationCost =
    baseCustomizationCost + speedCustomizationBonus;

  return {
    fixedCost: isFeaturePage ? fixedCost : finalFixedCost,
    customizationCost: isFeaturePage
      ? customizationCost
      : finalCustomizationCost,
    totalCost: isFeaturePage
      ? (fixedCost + customizationCost).toFixed(0)
      : (finalFixedCost + finalCustomizationCost).toFixed(0),
    indicativeDurationInWeeks,
    totalTimeline,
    phasesCost:
      fixedBonus + customizationBonus - (fixedPenalty + customizationPenalty),
  };
};
