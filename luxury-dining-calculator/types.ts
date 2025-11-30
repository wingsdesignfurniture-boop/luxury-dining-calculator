export enum SeatingCapacity {
  SIX = '6',
  EIGHT = '8'
}

export enum TopMaterial {
  ONYX = 'ONYX',
  ITALIAN = 'ITALIAN'
}

export enum BaseVariant {
  WOODEN = 'WOODEN',
  METAL_LIGHT = 'METAL_LIGHT',
  METAL_HEAVY = 'METAL_HEAVY'
}

export interface CalculationResult {
  topCost: number;
  baseCost: number;
  totalCost: number;
  clientPrice: number; // 80% markup
  designerPrice: number; // 55% markup
  area: number;
}
