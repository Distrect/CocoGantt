import { ICOCOMOTable } from './../interfaces/cocomo.interface';

export const cocomoTable: ICOCOMOTable = {
  organic: { a: [2.4, 3.2], b: [1.05, 1.05], c: 2.5, d: 0.38 },
  semidetached: { a: [3, 3], b: [1.12, 1.12], c: 2.5, d: 0.35 },
  embedded: { a: [3.6, 2.8], b: [1.2, 1.2], c: 2.5, d: 0.32 },
};
