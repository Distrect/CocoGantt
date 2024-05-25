import { IEffortAdjustmentFactor } from './../interfaces/project/eaf.interface';

export const eaf: IEffortAdjustmentFactor[] = [
  {
    attribute: 'Required software reliability',
    veryLow: 0.75,
    low: 0.88,
    nominal: 1,
    high: 1.15,
    veryHigh: 1.4,
    extraHigh: null,
  },
  {
    attribute: 'Size of application database',
    veryLow: null,
    low: 0.94,
    nominal: 1,
    high: 1.08,
    veryHigh: 1.16,
    extraHigh: null,
  },
  {
    attribute: 'Complexity of the product',
    veryLow: 0.7,
    low: 0.85,
    nominal: 1,
    high: 1.15,
    veryHigh: 1.3,
    extraHigh: 1.65,
  },
  {
    attribute: 'Run-time performance constraints',
    veryLow: null,
    low: null,
    nominal: 1,
    high: 1.11,
    veryHigh: 1.3,
    extraHigh: 1.66,
  },
  {
    attribute: 'Memory constraints',
    veryLow: null,
    low: null,
    nominal: 1,
    high: 1.06,
    veryHigh: 1.21,
    extraHigh: 1.56,
  },
  {
    attribute: 'Volatility of the virtual machine environment',
    veryLow: null,
    low: 0.87,
    nominal: 1,
    high: 1.15,
    veryHigh: 1.3,
    extraHigh: null,
  },
  {
    attribute: 'Required turnabout time',
    veryLow: null,
    low: 0.87,
    nominal: 1,
    high: 1.07,
    veryHigh: 1.15,
    extraHigh: null,
  },
  {
    attribute: 'Analyst capability',
    veryLow: 1.46,
    low: 1.19,
    nominal: 1,
    high: 0.86,
    veryHigh: 0.71,
    extraHigh: null,
  },
  {
    attribute: 'Applications experience',
    veryLow: 1.29,
    low: 1.13,
    nominal: 1,
    high: 0.91,
    veryHigh: 0.82,
    extraHigh: null,
  },
  {
    attribute: 'Software engineer capability',
    veryLow: 1.42,
    low: 1.17,
    nominal: 1,
    high: 0.86,
    veryHigh: 0.7,
    extraHigh: null,
  },
  {
    attribute: 'Virtual machine experience',
    veryLow: 1.21,
    low: 1.1,
    nominal: 1,
    high: 0.9,
    veryHigh: null,
    extraHigh: null,
  },
  {
    attribute: 'Programming language experience',
    veryLow: 1.14,
    low: 1.07,
    nominal: 1,
    high: 0.95,
    veryHigh: null,
    extraHigh: null,
  },
  {
    attribute: 'Application of software engineering methods',
    veryLow: 1.24,
    low: 1.1,
    nominal: 1,
    high: 0.91,
    veryHigh: 0.82,
    extraHigh: null,
  },
  {
    attribute: 'Use of software tools',
    veryLow: 1.24,
    low: 1.1,
    nominal: 1,
    high: 0.91,
    veryHigh: 0.83,
    extraHigh: null,
  },
  {
    attribute: 'Required development schedule',
    veryLow: 1.23,
    low: 1.08,
    nominal: 1,
    high: 1.04,
    veryHigh: 1.1,
    extraHigh: null,
  },
];
