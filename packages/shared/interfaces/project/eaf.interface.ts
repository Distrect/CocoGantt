export interface IEffortAdjustmentFactor {
  attribute: string;
  veryLow: number | null;
  low: number | null;
  nominal: 1;
  high: number;
  veryHigh: number | null;
  extraHigh: number | null;
}
