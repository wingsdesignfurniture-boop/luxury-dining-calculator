import { BaseVariant, SeatingCapacity, TopMaterial } from "./types";

// Pricing per square foot
export const TOP_RATES = {
  [TopMaterial.ONYX]: 1600,
  [TopMaterial.ITALIAN]: 1200,
};

// Fixed pricing for bases
// Light Metal follows the original "Metal" pricing: 50k (6-seater), 55k (8-seater)
// Heavy Metal is fixed at 62k as per new instructions
export const BASE_PRICES = {
  [SeatingCapacity.SIX]: {
    [BaseVariant.WOODEN]: 25000,
    [BaseVariant.METAL_LIGHT]: 50000,
    [BaseVariant.METAL_HEAVY]: 62000,
  },
  [SeatingCapacity.EIGHT]: {
    [BaseVariant.WOODEN]: 28000,
    [BaseVariant.METAL_LIGHT]: 55000,
    [BaseVariant.METAL_HEAVY]: 62000,
  },
};

// Additional fixed cost for wooden ply under the marble
export const PLYWOOD_COST = 4000;

export const MARKUP_RATES = {
  CLIENT: 1.80, // 80% markup
  DESIGNER: 1.55, // 55% markup
};